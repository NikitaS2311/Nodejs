function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//module.exports = add;
//module.exports = sub;  // in this function gets overwrite, like add will get overwritten 
// by the sub so to avoid
module.exports = {
    add,
    sub,
}
