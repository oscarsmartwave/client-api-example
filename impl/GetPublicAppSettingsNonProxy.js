'use strict';

const assert = require('assert');

module.exports.setup = function(server, proxy) {

  /**
   * @swagger
   * /mobilepublic/v3.16/api.asmx/GetPublicAppSettings:
   *  post:
   *   description: Proxy endpoint for querying products by search model
   *   produces:
   *    - application/json
   *   parameters:
   *    - name: CountryID
   *      description: query string
   *      required: true
   *      type: string
   *   
   *   
   *   responses:
   *       200: OK
   *   
   */
  server.post('/mobile/public/v3.16/api.asmx/GetPublicAppSettings', (req, res, next) => {
    assert(false, 'Implement this');
    return next();
  });

}
