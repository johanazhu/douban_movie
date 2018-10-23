/**
 * Created by Johnny Joestar on 2018/10/23.
 */
module.exports = `
doctype html
html
    head
        meta(charset='utf-8')
        meta(name='viewport',content='width=device-width,initial-scale=1')
        title 电影预告片
        link(href='https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css')
        script(src='https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
        script(src='https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js')
    body
        .container
            .row
                .col-md-8
                    h1 Hi #{you}
                    p This is#{me}
                .col-md-4
                    h2 动态资源 pug页面
`