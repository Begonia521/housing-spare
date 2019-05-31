/* eslint valid-jsdoc: "off" */

// 'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554276031773_3094';

  // add your middleware config here
  config.middleware = [];
   // add your user config here
   const userConfig = {
    // myAppName: 'egg',
  };


    config.security = {
      csrf: {
        enable: false,
        ignoreJSON: true
      },
      domainWhiteList: ['http://localhost:8080']
    };
    config.cors = {
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
  

  return {
      // config/config.${env}.js
    ...config,
    ...userConfig,
  };
};
