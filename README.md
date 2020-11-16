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

4. 
