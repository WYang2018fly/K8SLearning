const Koa = require("koa");
const router = require("./src/router");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/mock',{
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// })

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// mongoose.connection.on('connected', () => {
//   console.log(`Mongoose default connection to: localhost:27017`);
// });

app.listen(3001, () => {
  console.log("server listen on port 3001");
});
