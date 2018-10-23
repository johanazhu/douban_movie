/**
 * Created by Johnny Joestar on 2018/10/23.
 */
const Koa = require('koa')
const app = new Koa()
const {htmlTpl, ejsTpl, pugTpl} = require('./tpl/index')
const ejs = require('ejs')
const pug = require('pug')

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    ctx.body = pug.render(pugTpl, {
        you: 'johan',
        me: '付婵'
    })
})
app.listen(4450)
console.log('demo in run')