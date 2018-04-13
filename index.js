import Koa from "koa";
import Body from "koa-body";
import Router from "koa-router";
import Cors from "@koa/cors";
import Cookie from "koa-cookie";

const PORT = 3002;

// instances
const app = new Koa();
const router = new Router();

// response
router.get("/", ctx => {
  ctx.body = "Hello Koa";
});

// middleware
app
  .use(Cors({ credentials: true }))
  .use(Body())
  .use(Cookie())
  .use(router.routes())
  .use(router.allowedMethods());

// start server
app.listen(PORT);
