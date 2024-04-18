

/* const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //Do calls, cyptography, network

    // setTimeout is a Async task which we do
    setTimeout(function(){
        console.log("Async task is completed");
        //Call resolve method that will connect the .then function and execute it.
        resolve();

    },1000)
    
})

// Consume the by using then function and the then function receives a callback function
promiseOne.then(function(){
    console.log("Promise consumed");
})


// We can also use promise by this way  also without storing it
new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){ console.log("Promise 2 consumed");}); */


/* // Passing the value object, array in the argument of resolve function
const promisesThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName : "Abhay1158", 
        email : "abhayp.singh200029@gmail.com"});
    },1000)
});

promisesThree.then(function(user){
    console.log(user);
}); */


const user= {userName : "abhay1158",emial:"lotsofcraving@gmial.com"}
//Here we learn callBack hell .then chaining
const promiseFour = new Promise(function(resolve,reject){
    let error=true;
    if(!error){
        setTimeout(function(user){

        },1000)
    
});