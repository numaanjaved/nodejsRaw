const fs = require('fs');


const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    if(url === '/'){ 
        response.setHeader('Content-Type', 'text/html');      
        response.write(`<html><head><title>firstpage</title></head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></html>`);
        return response.end();        
    }
    if(url === '/message' && method === 'POST'){ 
        const body = [];
        request.on('data', (data) => {
            console.log(data);
            body.push(data);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');        
                return response.end();
            });      
        });
    }
    response.setHeader("Content-Type", "text/html");
    response.write(`<html><head><title>firstpage</title></head><body>hello ${url} from nodejs</body></html>`);
    
    response.end();
}


module.exports.handler = requestHandler;
module.exports.test = "it works";
