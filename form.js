// import { validation, nullify, clearAll } from './utils.js';
// or as default
// import validation, { nullify, clearAll } from './utils.js';
// or as default
import { default as validation, nullify, clearAll } from './utils.js';
/**
 * any of the above syntax to import a module function should work
 * if everything has been exported accordingly
 * as indicated in the writeup
 */

// function stores user to storage
const storeUser = (user) => {

    // get localStorage
    var storage = window.localStorage.getItem('users');
    // check first if storage exist
    // else create new and call it `users`
    var users = [];
    if (storage === undefined && storage === null) {
        users.push(user);
        window.localStorage.setItem('users', JSON.stringify(users));
    } else {
        // create an array where to store the added values
        // otherwise we do not want to replace the old values with new ones.
        if(storage !== undefined && storage !== null) {
            if(storage.length !== 0) {
                users = JSON.parse(window.localStorage.getItem('users'));
            }
        }
        
        // then add new user to the list
        users.push(user);
        // here we are storing the users to local storage
        window.localStorage.setItem('users', JSON.stringify(users));
    }
}

// register a single user load to page list items
const register = () => {
    var username = document.getElementById("username").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    if (validation(username, firstname, lastname, email)) {
        // define the javascript object to be stored in local storage
        const user = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email
        }

        // store the added user to local storage
        storeUser(user);

        // alert user that submission was a success
        alert("Submitted Successfully...");

        // then nullify all fields in the form using thier ids
        nullify(['firstname', 'username', 'lastname', 'email']);

        // load all users to page from local storage
        loadAndListAllUsers();
    }
}

// function creates a single li element and set the innerHtml property to user's details
const singleUserListElement = (user) => {
    // create li element which will hold the user's details(name and email)
    let item = document.createElement('li');
    // then set user details to innerHtml property
    item.innerHTML = user;
    item.addEventListener('click', function(){
        
    })
    // then finally return this li element ie <li>Isaac(imwakabira@ymail.com)</li>
    // to be appended to the parent ul element when loaded to the document page
    return item;
}

// load users to users list
const loadAndListAllUsers = () => {

    // get ul element to append all users to
    let ul = document.getElementById('list_of_users');

    // get store
    var storage = window.localStorage.getItem('users');
    // parse the stored values to javascript object: from localstorage 
    // into users variable
    var users = [];
    // if not null that is when we can parse the object from string to javascript object
    if(storage !== undefined && storage !== null) {
        if(storage.length !== 0) {
            // parse store to js object/array
            users = JSON.parse(storage);
        }
    }
    
    // if users is not null and length is not equal to 0
    // then iterate through the array list
    // while appending(adding to page) to the list in the page
    // using singleUserListElement function
    if(users !== null) {

        // refresh thw page to remove the already listed items
        // window.location.reload();

        if (users.length !== 0) {

            users.map(user => {
                // add user details to the list of unordered list items
                return ul.appendChild(singleUserListElement(user.username + '(' + user.email + ')'));
            });

        }

    }
}

// entry point of our application
// IIFE
(function() {
    const submit = document.getElementById('btn_id');
    submit.addEventListener('click', register);

    const list = document.getElementById('list');
    list.addEventListener('click', loadAndListAllUsers);

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearAll);
    // reload page after clearing storage
})()
