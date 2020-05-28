import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
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
};

export default plugin;
