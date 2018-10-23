/**
 * Created by Johnny Joestar on 2018/10/23.
 */
module.exports = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>电影预告片</title>
        <link rel="stylesheet" href="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1>Hi <%= you %></h1>
                    <p><%= me %></p>
                </div>
                <div class="col-md-4">
                    <h1>静态资源</h1>
                </div>
            </div>
        </div>
    </body>
</html>
`