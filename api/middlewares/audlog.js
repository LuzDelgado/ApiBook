/* MIDDLEWARES audits.log */
/* date - username - path */
var fs = require('fs');

const audlog = (req, res, next)=>{    
    let cadena = new Date() +  req.path + "\n";
    fs.appendFile('./files/audits.log', cadena, (err) => {
        if(err){
            res
            .satatus(500)
            .send("Ocurrió un error escribiendo en el archivo audlog");
        }        
    });    
    next();
 };
 
 module.exports = audlog;


