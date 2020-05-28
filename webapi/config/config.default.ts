import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589806501341_7119';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  // const bizConfig = {
  //   sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  // };
  config.alinode = {
    enable: false,
    appid: '84894',
    secret: 'd24de863198f467cc4a00f2ffb048ab129c01d19',
  };
  config.passportJwt = {
    secret: 'ICeBrEakEr99',
  };
  config.validate = {};
  config.mongoose = {
    url: 'mongodb://feiJasCy:JasCy!j2n@140.143.62.177:27018',
    options: {
      useNewUrlParser: true,
      connectTimeoutMS: 30000,
      poolSize: 10,
      autoReconnect: true,
      reconnectTries: 30,
    },
  };
  config.graphql = {};
  // the return config will combines to EggAppConfig
  return {
    ...config,
    // ...bizConfig,
  };
};
