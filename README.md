# inf-221-practice-tasks
HTML DOM, IIFE, JS Modules &amp; Web APIs - LocalStorage

1. Add Form Elements
    <label>Username :</label>
    <input type="text" name="username" id="username" placeholder="Your username..." />
    <label>Firstname :</label>
    <input type="text" name="firstname" id="firstname" placeholder="Your  firstname..." />
    <label>Lastname :</label>
    <input type="text" name="lastname" id="lastname" placeholder="Your  lastname..." />
    <label>Email :</label>
    <input type="text" name="email" id="email" placeholder="Your valid email..." />

2. Including external files to HTML document
    a. Create form.js file in the same project folder
    b. Include it in the index.html as below
                </body>
            <!-- Include JS File Here -->
            <script src="form.js" type="module" lang="javascript"></script>
        </html>

3. Add Form Utility functions
    a. create utils.js file in the root project folder in which all these methods will be wrtten.

    b. to check if all form fields have been filled:

        const validation = (...fields) => {
            // check which fields are empty
            const isSomeEmpty = fields.some(field => field === '');

            if(isSomeEmpty){
                alert("Please fill all fields...!!!!!!");
                return false;
            } else {
                return true;
            }
        }

    c. to set to null all form fields after form submission:

        const nullify = (fields) => {
            if (fields.length !== 0) {
                fields.map(field => {
                    document.getElementById(field).value = '';
                });
            }
        }

    d. to clear localStorage store, when user clicks clear button:

        const clearAll = () => {
            // localStorage
            var storage = window.localStorage.getItem('users');
            // check if it exists, then assign users object to an empty array
            // otherwise do nothing
            if (storage !== undefined) {
                window.localStorage.setItem('users', []);
                alert("Successfully clear storage!!")
            }
        }

4. JS Modules
    a. add the following functions or methods above the IIFE in the form.js file. To resolve the errors you see in the console

        i. function stores user to storage

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

        ii. register a single user load to page list items

            const register = () => {
                // access form element's values
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

        iii. function creates a single li element and set the innerHtml property to user's details

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

        iv. load users to users list

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

5. JS Modules - export & import
Even after adding all the required functions we still get "undefined function" errors. If you check the functions in the utils.js file, none has been exported. Also none has been imported in the form.js file so that they can be used.
    
    a. export each function from the utils.js by adding an export keyword before each declaration like so:

        export const validation = (...fields) => { /* everything here */ }

        export const nullify = (fields) => { /* everything here */ }

        export const clearAll = () => { /* everything here */ }

    b. note that a module can only contain ONE default export.Therefore, export validation methothd as a default by adding below line after its declaration, like so:

        const validation = (...fields) => {
            // check which fields are empty
            const isSomeEmpty = fields.some(field => field === '');

            if(isSomeEmpty){
                alert("Please fill all fields...!!!!!!");
                return false;
            } else {
                return true;
            }
        }

        // add this line
        export default validation;

    c. then import wherever they are needed i.e inside the form.js file. On the first line in the file. like so:

        import { validation, nullify, clearAll } from './utils.js'; 

        or 

        import { default as validation, nullify, clearAll } from './utils.js';


6. Final Errors
Every time users are loaded, the list is duplicated when creating new element and appending to the page's unordered list. Resolve this error by making sure we only add a single element to the list. (You can do it on your own time)