const Router = require("koa-router");
const { Test } = require("../model");
const router = new Router({
  prefix: "/api",
});

router.get("/", async (ctx) => {
  ctx.body = "get request";
  ctx.status = 200;
});

router.post("/", async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = "post request";
  ctx.status = 200;
});

router.get("/hello2", async (ctx) => {
  const requestServiceName = ctx.query.name;
  console.log("reponse => hello1");
  ctx.body = {
    requestServiceName,
    responseServiceName: "hello2",
  };
  ctx.status = 200;
});

router.post("/test", async (ctx) => {
  let { key, value } = ctx.request.body;
  let result = await Test.create({ key, value });
  ctx.body = result;
  ctx.status = 201;
});

router.delete("/test/:id", async (ctx) => {
  await Test.deleteOne({ _id: ctx.params.id });
  ctx.body = "delete success";
  ctx.status = 200;
});

router.patch("/test/:id", async (ctx) => {
  let newData = ctx.request.body;
  let result = await Test.findByIdAndUpdate(ctx.params.id, newData, {
    new: true,
  });
  ctx.body = result;
  ctx.status = 201;
});

router.get("/test", async (ctx) => {
  let page = parseInt(ctx.query.page);
  let size = parseInt(ctx.query.size);
  let key = ctx.query.q;

  let condition = {};
  if (key) {
    const reg = new RegExp(key, "i");
    condition.key = { $regex: reg };
  }

  let result = await Test.find(condition)
    .sort({ value: 1 })
    .skip((page - 1) * size)
    .limit(size);
  ctx.body = result;
  ctx.status = 200;
});

router.get("/test/:id", async (ctx) => {
  let result = await Test.findById(ctx.params.id);
  ctx.body = result;
  ctx.status = 200;
});

module.exports = router;
