import { Controller } from 'egg';

export default class DemoController extends Controller {
  public async index() {
    const ctx = this.ctx;

    ctx.body = await ctx.service.demo.sayHi('ds');
  }
}
