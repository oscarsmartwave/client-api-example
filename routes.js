'use strict';

const GetPublicAppSettingsProxy = require('./impl/GetPublicAppSettingsProxy.js');
const GetPublicAppSettingsNonProxy = require('./impl/GetPublicAppSettingsNonProxy.js');

const routes = {
  init: function(server, proxy) {
    GetPublicAppSettingsProxy.setup(server, proxy);
    GetPublicAppSettingsNonProxy.setup(server, proxy);
  }
}


module.exports = routes;
