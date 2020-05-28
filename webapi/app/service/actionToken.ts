
import { Service } from 'egg';

class ActionTokenService extends Service {
  async apply(id) {
    const { ctx } = this;
    return ctx.app.jwt.sign({
      data: {
        id,
      },
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1),
    }, ctx.app.config.jwt.secret);
  }
}

module.exports = ActionTokenService;
