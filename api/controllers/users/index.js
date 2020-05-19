/* CONTROLLER USERS */
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

//referencia al servicio
const usersModule = require('./../../services/users');

const tokenKey = "my-secret-key";
var saltRounds = 10;

//.get(usersAuthen, (req, res)=>{
//res.sendStatus(500); 
router.route('/')
    .get((req, res)=>{
        res
        .status(200)
        .send(usersModule.loadUsers());
    })
    .post((req, res)=>{
        const plainPassword = req.body.passwd;        
        const salt = bcrypt.genSaltSync(saltRounds);        
        const hash = bcrypt.hashSync(plainPassword, salt);           
        const user = {
            iduser: usersModule.arrayUserLength(),
            nmuser: req.body.nmuser,
            usernm: req.body.usernm,
            passwd: hash
        };
        //Crear Objeto User
        usersModule.newUser(user);
        res
        .status(200)
        .send(`Usuario ${user.usernm} Creado con passwd ${user.passwd}`);
    });
   
router.route('/login')
    .post((req, res)=>{
    const username = req.body.usernm;
    const password = req.body.passwd;
    
    //buscar el usuario a autenticar en el arreglo users (servicio)
    console.log(usersModule.findUsers(username, password));

    if (usersModule.findUsers(username, password) == 'S') {   

        const token = jwt.sign({username: username}, tokenKey); 

        res
        .status(200)
        .send(`{token: ${token} }`);

    } else {    

        res
        .status(500)
        .send(`Datos no válidos`);

    };
});

module.exports = router;