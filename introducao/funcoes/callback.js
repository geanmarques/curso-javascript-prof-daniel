function teste (cb){
    console.log("função teste");
    cb();
}
teste(function(){
    console.log("função anonima de callback")
})