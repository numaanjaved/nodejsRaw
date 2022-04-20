
const users = (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url);
    
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data', data => {
            console.log(data);
            body.push(data);
        });
        req.on('end', () => {
            const parsed = Buffer.concat(body).toString();
            const parsedData = parsed.split('=')[1];
            console.log(parsedData);
            res.statusCode = 302;
            res.setHeader("Location", "/users");
            return res.end();            
        });
        
    }
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>First Assignment</title></head><body><h1>Hello Welcome to my first assignment</h1><form action="/create-user" method="POST"><input type="text" name="user-name"><button type="submit">Add User</button></form></body></htmll>');
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><head><title>First Assignment</title></head><body><h1>List of Users</h1><ul><li>Hira</li><li>Usama</li><li>Talha</li><li>Amna</li></ul></body></htmll>');
        return res.end();
    }
}

exports.users = users;
