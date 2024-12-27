/**
 * Climate API
 * API for the Climate project.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddSensorPost200Response from '../model/AddSensorPost200Response';
import AddSensorPostRequest from '../model/AddSensorPostRequest';
import AllSensorsGet200ResponseInner from '../model/AllSensorsGet200ResponseInner';
import SensorPatch200Response from '../model/SensorPatch200Response';
import SensorPatchRequest from '../model/SensorPatchRequest';

/**
* Sensors service.
* @module api/SensorsApi
* @version 0.1.0
*/
export default class SensorsApi {

    /**
    * Constructs a new SensorsApi. 
    * @alias module:api/SensorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addSensorPost operation.
     * @callback module:api/SensorsApi~addSensorPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AddSensorPost200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new sensor
     * Add a new sensor to the database with its IP and port.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddSensorPostRequest} [body] 
     * @param {module:api/SensorsApi~addSensorPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AddSensorPost200Response}
     */
    addSensorPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = AddSensorPost200Response;
      return this.apiClient.callApi(
        '/addSensor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the allSensorsGet operation.
     * @callback module:api/SensorsApi~allSensorsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AllSensorsGet200ResponseInner>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all sensors
     * Retrieve all sensors stored in the database.
     * @param {module:api/SensorsApi~allSensorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AllSensorsGet200ResponseInner>}
     */
    allSensorsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [AllSensorsGet200ResponseInner];
      return this.apiClient.callApi(
        '/allSensors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorPatch operation.
     * @callback module:api/SensorsApi~sensorPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SensorPatch200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update sensor information
     * Update the display name and offsets for a sensor.
     * @param {Object} opts Optional parameters
     * @param {module:model/SensorPatchRequest} [body] 
     * @param {module:api/SensorsApi~sensorPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SensorPatch200Response}
     */
    sensorPatch(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = SensorPatch200Response;
      return this.apiClient.callApi(
        '/sensor', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
