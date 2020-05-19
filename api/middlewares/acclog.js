/* MIDDLEWARES  access.log */
/* utilizar Morgan */
var fs = require('fs');

const acclog = (req, res, next)=>{             
       const log = {
          fecha:new Date(), 
          path:req.path,
          peticion:req.method, 
          headers:req.headers, 
          body:req.body
       };      
       //console.log(`./${config.files.path}/${config.files.filename.file_log}`);
       fs.appendFile('./files/access.log', `${JSON.stringify(log)},`, (err) => {
          if(err){
             res
             .status(500)
             .send("Ocurrió un error escribiendo en el archivo acclog");
          }
       });
       next();
    };

module.exports = acclog;