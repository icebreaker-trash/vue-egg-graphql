import { Application } from 'egg';
// import { Strategy as LocalStrategy } from 'passport-local';
export default (app: Application) => {
  app.validator.addRule('jsonString', (_rule, value) => {
    try {
      JSON.parse(value);
    } catch (err) {
      return 'must be json string';
    }
  });

  app.beforeStart(async () => {
    console.log('beforeStart');
  });
  // 挂载 strategy
  // app.passport.use(new LocalStrategy({
  //   passReqToCallback: true,
  // }, (req, username, password, done) => {
  //   // format user
  //   const user = {
  //     provider: 'local',
  //     username,
  //     password,
  //   };
  //   console.log('%s %s get user: %j', req.method, req.url, user);
  //   app.passport.doVerify(req, user, done);
  // }));

  // 处理用户信息
  // app.passport.verify(async (ctx, user) => {

  // });
  // app.passport.serializeUser(async (ctx, user) => { });
  // app.passport.deserializeUser(async (ctx, user) => { });
};
