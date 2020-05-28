import { Application } from 'egg';

export default (app: Application) => {

  const { controller, router } = app;
  const jwt = app.passport.authenticate('jwt', { session: false });


  router.get('/protected', jwt, controller.home.index);
  router.get('/', controller.home.index);
};
