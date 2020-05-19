/* SERVICE USERS */
var bcrypt = require('bcrypt');
/* Objeto user
[
    {
        iduser: auto,
        nmuser: string,
        usernm: string,
        passwd: encriptado
    }
]
*/
const usersArray = [];

const newUser = (user) => {
    usersArray.push(user);
};

const loadUsers = () => {
    return usersArray;
};

const findUsers = (nm, pwd) => {
    var swok = 'N';      
    for (u in usersArray) {        
        if ((usersArray[u].usernm ===  nm)  &&
           (bcrypt.compareSync(pwd, usersArray[u].passwd))) {
            var swok = 'S';
        };                    
    };
    return swok;
};

const arrayUserLength = () => {
    return usersArray.length + 1;
};

module.exports = {newUser, loadUsers, arrayUserLength, findUsers};