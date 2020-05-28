import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;
  // tslint:disable
  router.get('/', jwt, controller.home.index);
};
