// form input fields validation
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

// set all form fields to null
const nullify = (fields) => {
    if (fields.length !== 0) {
        fields.map(field => {
            document.getElementById(field).value = '';
        });
    }
}

// clear users from storage
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