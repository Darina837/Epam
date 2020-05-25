function assign() {
    let obj = {};
    for(let i=0; i < arguments.length; i++) {
        for(let j=0; j < Object.keys(arguments[i]).length; j++) {
            obj[Object.keys(arguments[i])[j]] = arguments[i][Object.keys(arguments[i])[j]];
        }
    }
    return obj;
}