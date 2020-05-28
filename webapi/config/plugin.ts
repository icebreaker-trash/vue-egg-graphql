import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportJwt: {
    enable: true,
    package: 'egg-passport-jwt',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  graphql: {
    enable: true,
    package: 'egg-graphql',
  },
};

export default plugin;
