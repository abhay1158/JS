

const promiseOne = new Promise(function(resolve,reject){
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
}).then(function(){ console.log("Promise 2 consumed");});