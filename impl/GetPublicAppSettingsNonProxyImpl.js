'use strict';

const assert = require('assert');


function execute(req, res, next) {

  // write your custom impl
  assert(false, 'Implement this');

  return next();

}

const GetPublicAppSettingsNonProxyImpl = {
  execute: execute
}


module.exports = GetPublicAppSettingsNonProxyImpl;
