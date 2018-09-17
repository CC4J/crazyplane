const Koa = require('koa');
const path = require('path')
const static = require('koa-static')
const views = require('koa-views');

const app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))

app.use(views(__dirname + '/views', {
  extension: 'html'
}));

// response
app.use(async function (ctx) {
  if (ctx.req.url == '/') {
    await ctx.render('index.html')
  } else {
    await ctx.res.end('not found, 404')
  }
})

app.listen(80);