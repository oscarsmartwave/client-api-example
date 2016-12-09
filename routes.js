'use strict';

const GetPublicAppSettingsProxy = require('./routes/GetPublicAppSettingsProxy');
const GetPublicAppSettingsNonProxy = require('./routes/GetPublicAppSettingsNonProxy');

const routes = {
  init: function(server, proxy) {
    GetPublicAppSettingsProxy.setup(server, proxy);
    GetPublicAppSettingsNonProxy.setup(server, proxy);
  }
}


module.exports = routes;
