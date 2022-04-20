const fs = require("fs");
const path = require("path");
const p = path.join(path.dirname(require.main.filename),"data", "products.json");

module.exports = class Product{
    constructor(t){
        this.title = t;
    }
    save(){
        const p = path.join(path.dirname(require.main.filename),"data", "products.json");
        console.log(p);
        fs.readFile(p, (error, fileContent) => {
            // console.log(fileContent)
            const products = [];
            if(!error){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (error) => {
                console.log(error);
            })
        });
    }
    static fetchAll(cb){
        fs.readFile(p, (error, fileContent) => {
            if(error){
                return cb([]);
            }
            else{
                return cb(JSON.parse(fileContent));
            }
        });
    }
}