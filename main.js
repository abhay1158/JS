// const accountId = 16830 // not able to change further
// let accountEmail = "abhay@gmail.com"

// var accountPassword = "abhay1158"
// let valueInNumber = Number(accountPassword)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// accountCity = "Sln"

// accountId = 16803  //----not allowed


// accountEmail = "prachi@gmail.com"
// accountPassword = "1302"
// accountCity = "Cnb"

// console.log(accountId,accountEmail,accountPassword,accountCity)

// console.table([accountId, accountEmail, accountPassword, accountCity]) //--- it print content in table format------


// function myFunction(){
//     let date=new Date("2024-1-23")
//     alert(date)
//     confirm(date)
//     prompt(date)
// }

// let state;
// console.log(state)   //it's print undefined

// let temp=null
// var name = ""

// console.log(typeof state)  //will print undefined

// console.log(typeof temp)  //will print object

// console.log(typeof name)  //will print string

// console.log(typeof null)  //will print object


// console.log("1"+2);

// console.log("1"+2+2);

// console.log(1+2+"2")

// console.log(null > 0);-----------------gives false value----------------

// console.log(null < 0);-----------------gives false value----------------

// console.log(null == 0);-----------------gives false value----------------

// console.log(null >=0);-----------------gives true value----------------

// console.log("2" === 2); // Strict checking-----------------gives false value----------------


// console.log(===)

// console.log(Number.MAX_VALUE);

// let date=new Date(2024,1,23);
// console.log(date.toDateString());

// let marvel_heros = ["Thor","Ironman","Spiderman"];

// let dc_heros = ["Superman","flash"];

// console.log(marvel_heros + dc_heros);

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// console.log(marvel_heros.concat(dc_heros));

// console.log(marvel_heros.push(dc_heros));

// const all_new_heros = [...marvel_heros,...dc_heros];  // use of spread operator
// console.log(all_new_heros);
// console.log([...marvel_heros,...dc_heros]);


// //========================Object literals===============================================================================================
// let user1 = {
//     name:"Abhay",
//     location: "Sln",
//     isloggedin: false,
//     lastLoggedinDay: ["Monday","Tuesday","Wednesday"]
// };

// function myInfo(fname, lname, country){
//     return `My name is ${fname} ${lname} and i am from ${country}`;
// }
// // ========================================String InterPolation=========================================================================
// console.log(myInfo("Abhay","Singh","India"));
// console.log(`Name ${user1.name} and last loggedIn on ${user1.lastLoggedinDay}`);
// console.log(user1["name"]);

// Object.freeze(user1); //------user1 object is freezed, can't able to change the attribute and values--------
// user1.location="lko";


// const mySym =Symbol("key1"); // use Symbol as a key in object
// let user = {
//     // [mySym] : "mykey1",  // use Symbol as a key
//     name :"abhay",
//     "full name": "abhay pratap singh", // use string as a key

//     universityName : "Aktu",

//     universityCourseInstructorName : "Prachi Rathore"

// };
// //========================================destructing of object=====================================================================
// const {universityName} = user;

// const {universityCourseInstructorName : instructor} = user;

// console.log(universityName);
// console.log(instructor);

// console.log(user[mySym]); //---Way of calling when Symbol as a key

// console.log(user.name);

// console.log(user["full name"]); //---Way of calling When String as a key


// / let obj2 = {1:1,2:2,3:3};-----iske saath kyo nhi aaraha

// let obj3 = {obj1,obj2};

// console.log(obj3);

// console.log(obj1+obj2);   //--kya hoga


// let obj1 = {
//     1: "a", 2:"b",3: {name: "Abhay", eamil: "abahy@gmail.com"}
// };

// let obj2 = {4:"c",5:"d"};


// const  hold = Object.assign({}, obj1,obj2)

// console.log(hold);

// ================================rest operator or Spread operator==================================

// function calculateCartValue(val1, ...Num1){
//     return {val1,Num1};
// }
// console.log(calculateCartValue(200,300,400,500,60,97));

// function one(){
//     const userName = "Abhay";

//     function two(){
//         const website = "Instagram";
//         console.log(userName);
//     }
//     console.log(website);

//     two();
// }

// one();

// // This keyword
//  let user = {
//     username : "Abhay",
//     password : 1234,
    
//     // print : console.log("outside fn" + this),

//     welcomemessage : function(){
//         console.log(`Welcome ${this.username}`);
//         // console.log("inside fn " + this);
//     }
//  }

// user.welcomemessage();

// console.log(this);

// function customer(){
//     let custId = "Abhay@1158";

//     console.log(this); // This give info 

//     console.log(this.custId); // this keyword not work inside function
// }

// customer();

// let cust = function(){
//     let custId = "Abhay@1158";

//     console.log(this.custId); // this keyword not work inside function expression
// }

// cust();

// // ===================================Arrow function=========================================
// let cust = () => {
//     let custId = "Abhay@1158";

//     console.log(this.custId);

//     console.log(this);
// }

// cust();

// const addTwo = (num1, num2) => {
//      return num1+num2;
// }
// console.log(addTwo(3,4));


// const addTwo = (num1, num2) => (num1+num2); // Implicit Return

// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => ({name : "Abhay"}); Implicit Return of object

// console.log(addTwo(3,4));

 // // =========================IIFE(Immediately Invoked Function Expressions)============================
// (function dbConnection(){
//     console.log(`Db connected successfully`);
// })();

// ( (name) => {
//     console.log(`Db connected successfully ${name}`);
// })("Abhay");

// //falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NAN

// // =========================Nullish Coalescing Operator==================================================
//  let val1;
//  val1 = 5 ?? 10; // isme 5 assign ho jayega val1 ke ander

//  let val2= null ?? 10 // val2 me 10 assign hoga

//  let val3 = undefined ?? 10 // val3 m 10 assign hoga

// console.log(val1);
// console.log(val2);
// console.log(val3);

// let value = 30;
// value <= 30 ? console.log("Yes it's true") : console.log("no it's false");

// // ====================For of loop==============================================================

// const greeting = "Ka ho ka haal baate";
// for (const words of greeting) {
    
//    process.stdout.write(words + " ");
// }

// //==========================hash Map========================================
// let map = new Map();
// map.set('IN',"India");
// map.set('USA',"United states of America");
// map.set('fr',"France");

// for (const [key,value] of map) {

//     console.log(`keys of hashmap :- ${key} AND Value :- ${value}`);

// }


// // ==============================for in loop======================================================
// const myObject={
//     js : "JavaScript",
//     cpp : "C++",
//     py : "Python",
//     java : "Java"
// };

// for (const key in myObject) {
//     console.log(`${key} is extension of ${myObject[key]}`);
// }
// console.log(`${myObject.js}`)


// // ===============================for Each loop==========================================================
// let coding = ["JavaScript","Java","Python","C++"];
// // 1st way
// coding.forEach(function(i){
//     console.log(i);
// })

// // 2nd way
// coding.forEach((i)=>{  // // here arrow function as callback function
//     console.log(i);
// })

// let arr =  [-1,-2,100,-3,3,4,1,-34,-100];
// console.log(arr.sort(function(a,b){return a-b;}));


