function register(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('error occured');
            console.log('register end');
        },2000);
    })}
function sendemail(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    //return reject('error occured');
    console.log('email end');  
    resolve();  
},1750);
})}
function login(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log('login end');
    resolve();
},1500);
})}
function getuserdata(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log('got user data');
    resolve();
},1000);
})}
function displayuserdata(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log('user data displayed');
    resolve();
},500);
})}
//async/await
async  function authenticate(){
    try {
        await register();
        await sendemail();
        await login()
        await getuserdata();
        await displayuserdata();
    } catch(err){
        console.log(err)
        throw new Error();
}
};  
authenticate().then(() =>{
    console.log('All set')
})


/*
register()
.then((sendemail))
.then(login)
.then(getuserdata)
.then(displayuserdata)
.catch((err) => {
    console.log('error: ',err);

});*/