'use strict';

module.exports.setup = function(server, proxy) {

  /**
   * @swagger
   * /public/v3.16/api.asmx/GetPublicAppSettings:
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
  server.post('/public/v3.16/api.asmx/GetPublicAppSettings', (req, res, next) => {
    proxy.web(req, res);
    return next();
  });

}
