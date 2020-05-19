/* CONTROLLER BOOKS */
var express = require('express');
var router = express.Router();

var usersAuthen = require('./../../middlewares/authent');
var acclog = require('./../../middlewares/acclog');
router.use(acclog);

//referencia al servicio
const booksModule = require('./../../services/books');

router.route('/')
    .get((req, res)=>{
        //Lista de objetos
        res
        .status(200)
        .send(booksModule.loadBooks());
    })
    .post((req, res)=>{        
        const book = {
            Idbook: booksModule.arrayBookLength(),
            nmbook: req.body.nmbook,
            aubook: req.body.aubook
        };
        //Crear objeto book
        booksModule.newBook(book);
        res
        .status(200)        
        .send(`El book ${book.nmbook} Creado con author ${book.aubook}`);
    });   

router.route('/:id')
    .get(usersAuthen, (req, res)=>{
        res
        .status(200)
        .send(`Pagina del books ${req.params.id}`);    
    }); 

module.exports = router;
