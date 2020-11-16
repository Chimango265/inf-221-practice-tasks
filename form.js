// entry point of our application
// IIFE
(function() {
    const submit = document.getElementById('btn_id');
    submit.addEventListener('click', register);

    const list = document.getElementById('list');
    list.addEventListener('click', loadAndListAllUsers);

    const clear = document.getElementById('clear');
    clear.addEventListener('click', clearAll);
})()
