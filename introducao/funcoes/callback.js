const teste = function (cb) {
    console.log("função teste");
    console.log(cb);
    typeof cb === "function" && cb(30)
    
}

const fn = function (param) {
    console.log("função anonima de callback");
    console.log(param)
}
// fn(30)
teste(fn)