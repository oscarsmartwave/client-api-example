'use strict';

const GetPublicAppSettingsNonProxyImpl = require('../impl/GetPublicAppSettingsNonProxyImpl');

module.exports.setup = function(server, proxy) {

  /**
   * @swagger
   * /mobile/public/v3.16/api.asmx/GetPublicAppSettings:
   *  post:
   *   description: Proxy endpoint for querying products by search model
   *   produces:
   *    - application/json
   *   parameters:
   *    - name: countryID
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

    GetPublicAppSettingsNonProxyImpl.execute(req, res, next);

  });

}
