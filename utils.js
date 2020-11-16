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