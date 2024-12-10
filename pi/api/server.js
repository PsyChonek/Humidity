// ESM
import Fastify from "fastify";
import connect from "./db.js";
import cors from "@fastify/cors";

const fastify = Fastify({
	logger: true,
});

await fastify.register(cors, {
	origin: "*",
	methods: ["GET", "POST", "PUT", "DELETE"],
});

const PORT = process.env.PORT || 27017;
const HOST = process.env.HOST || "db";
const USER = process.env.USER || "admin";
const PASSWORD = process.env.PASSWORD || "secret";
const DATABASE = process.env.DATABASE || "climate";

console.log(`Connecting to ${HOST}:${PORT}`);

const db = await connect(PORT, HOST, USER, PASSWORD, DATABASE);
const readings = db.collection("readings");

// POST newReading
fastify.post("/newReading", async (request, reply) => {
	const { sensorID, temperature, humidity, timestamp } = request.body;		

	let timestampNew = timestamp ? new Date(parseInt(timestamp)*1000).toISOString() : new Date().toISOString();

	var log = {
		sensorID: sensorID,
		temperature: temperature,
		humidity: humidity,
		timestamp: timestamp,
		timestampNew: timestampNew
	};
	console.log(log);

	const newReading = { sensorID, temperature, humidity, timestamp : timestampNew };
	const result = await readings.insertOne(newReading);
	return result;
});

fastify.get("/allReadings", async (request, reply) => {
    const { fromDate, toDate } = request.query;

    // Validate and parse dates
    const isValidDate = (date) => !isNaN(new Date(date).getTime());
    const startDate = fromDate && isValidDate(fromDate) ? new Date(fromDate) : new Date(0);
    const endDate = toDate && isValidDate(toDate) 
        ? new Date(new Date(toDate).setHours(23, 59, 59, 999)) 
        : new Date();

    console.log("Query Dates:", { startDate, endDate });

	if (!isValidDate(fromDate) || !isValidDate(toDate) || startDate > endDate) {
		const result = await readings.find().toArray();
		return result;
	}

    try {
        // Filter by date
        const result = await readings.find({
            timestamp: {
                $gte: new ISODate(startDate),
                $lte: new ISODate(endDate),
            },
        }).toArray();

        return result;
    } catch (error) {
        console.error("Error querying MongoDB:", error);
        reply.code(500).send({ error: "Failed to fetch readings." });
    }
});

/**
 * Run the server!
 */
const start = async () => {
	try {
		await fastify.listen({ port: 3000, host: "0.0.0.0" });
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};
start();