/* function abc() {
  return 1;
}


let storeRes = abc();
console.log(storeRes);

function abhay() {
  let k = 120;
  return function kunal() {
    let m = 10;
    console.log(k);
  };
  // console.log(k);
}



let storeRes2 = abhay();
console.log(storeRes2); //it will gives the exact function expression



// invoke Kunal function
console.log(storeRes2()); // it will gives the result of kunal() i.e, inner function */



function abc() {
  return 1;
}


let storeRes = abc();
console.log(storeRes);

function abhay() {
  let k = 120;
  return function kunal() {
    let m = 10;
    console.log(k);
  };
  // console.log(k);
}



let storeRes2 = abhay();
console.log(storeRes2); //it will gives the exact function expression



// invoke Kunal function
console.log(storeRes2()); // it will gives the result of kunal() i.e, inner function



