var jwt = require('jsonwebtoken');

const authent = (req, res, next) => {
    const token = req.headers['x-access-token'];
    let decoded;    
    try{
        decoded = jwt.verify(token, config.tokenKey);
    }catch(error){
        decoded = false;
    }
    !!decoded ? 
        next()
    :
        res
        .status(500)
        .send('Usuario no autorizado para acceso') 
};

module.exports = authent;

