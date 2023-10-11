function register(callback){
    setTimeout(() => {
    console.log('register end');
    callback();
},2000);
}
function sendemail(){
    setTimeout(() => {
    console.log('email end');
},1750);
}
function login(){
    setTimeout(() => {
    console.log('login end');
},1500);
}
function getuserdata(){
    setTimeout(() => {
    console.log('got user data');
},1000);
}
function displayuserdata(){
    setTimeout(() => {
    console.log('user data displayed');
},500);
}
register(function(){
    sendemail();
    login();
    getuserdata();
    displayuserdata(); 
    console.log("other user data");
});