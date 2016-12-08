'use strict';

var swaggerJSDoc = require('swagger-jsdoc');

var options = {
  swaggerDefinition: {
    info: {
      title: "client-api-example", // Title (required)
      version: "1.0.0", // Version (required)
    },
  },
  apis: ['./impl/GetPublicAppSettingsProxy.js','./impl/GetPublicAppSettingsNonProxy.js'], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
var swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;