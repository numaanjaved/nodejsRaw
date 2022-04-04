const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res) => { 
    const url = req.url;
    const method = req.method;
     res.setHeader('Content-Type', 'text/html');    
    if(url === '/'){    
        res.write(`<html><head><title>firstpage</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></html>`);
        return res.end();        
    }
    if(url === '/message' && method === 'POST'){ 
        const body = [];
        req.on('data', (data) => {
            console.log(data);
            body.push(data);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');        
                return res.end();
            });      
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write(`<html><head><title>firstpage</title></head><body>hello ${url} from nodejs</body></html>`);
    
    res.end();
});

server.listen(3000);