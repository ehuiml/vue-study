const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    const str = `地址${url},方式${method}`
    console.log(str);
    let content = '<h1>404 undefind</h1>';
    if (url === '/' || url === '/index') {
        content = '<h1>首页</h1>'
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(content)
})
server.listen(80, () => {
    console.log('success');
})