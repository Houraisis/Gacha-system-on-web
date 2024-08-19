const fs = require('fs');
require('http').createServer((req, res) => {
    const index = './gacha.html';
    const files = ['/gachadesign.css', '/gachascript.js'];
    if (req.url === '/')
        res.end(fs.readFileSync(index, 'utf8'));
    if (files.includes(req.url)) {
        res.end(fs.readFileSync('.' + req.url, 'utf8'));
    }
    res.end();
}).listen(4000);