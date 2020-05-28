import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  alinode: {
    enable: true,
    package: 'egg-alinode',
  },
};

export default plugin;
