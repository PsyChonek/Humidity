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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ClimateApi);
  }
}(this, function(expect, ClimateApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ClimateApi.NewReadingPostRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NewReadingPostRequest', function() {
    it('should create an instance of NewReadingPostRequest', function() {
      // uncomment below and update the code to test NewReadingPostRequest
      //var instance = new ClimateApi.NewReadingPostRequest();
      //expect(instance).to.be.a(ClimateApi.NewReadingPostRequest);
    });

    it('should have the property sensorID (base name: "sensorID")', function() {
      // uncomment below and update the code to test the property sensorID
      //var instance = new ClimateApi.NewReadingPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property temperature (base name: "temperature")', function() {
      // uncomment below and update the code to test the property temperature
      //var instance = new ClimateApi.NewReadingPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property humidity (base name: "humidity")', function() {
      // uncomment below and update the code to test the property humidity
      //var instance = new ClimateApi.NewReadingPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new ClimateApi.NewReadingPostRequest();
      //expect(instance).to.be();
    });

  });

}));
