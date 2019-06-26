/*
Assignment 1: Function and Array
Complete the function below to find the ​max number​ of passing numbers. You may refer to this ​MDN document​ about rest parameters of the function.
Reminder:​ you ​cannot​ use Math.max() to complete this assignment.
*/

// 1-1
function max(...numbers) {
  var arr = numbers.map(Number);
  var largest = arr[0];
  for (var i = 1; i < arr.length; i += 1) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(max(1, 2, 4, 5));


// 1-2
function max(...numbers) {
  var arr = numbers.map(Number);
  var largest = arr[0];
  for (var i = 1; i < arr.length; i += 1) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(max(5, 2, 7, 1, 6));

// Assignment 2: 
function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}
function makeArgs(args_s) {
  function functionForEachElement(args, index) {
    const { op, n1, n2 } = args
    console.log(`${index + 1} th call: ${n1} ${op} ${n2} is: ${calculate({ op, n1, n2 })}`);
  }
  // args_s.map(functionForEachElement);
  // /*
  for (index = 0; index < args_s.length; ++index) {
    const { op, n1, n2 } = args_s[index];
    // const op = args_s[index].op;
    console.log(`${index + 1} th call: ${n1} ${op} ${n2} is: ${calculate(args_s[index])}`);
  }
  // */
}

// 2-method1
console.log(calculate({ op: "+", n1: 1, n2: 2 }))

// 2-method2
// First, create an object named arguement.
let arguement = {};
// make an element of arguement named op and assign it with value "-"
arguement.op = "-";
arguement.n1 = 10;
arguement.n2 = 5;
console.log(calculate(arguement))

// 2-method3
makeArgs([{ op: "+", n1: 1, n2: 2 }, { op: "+", n1: 2, n2: 3 }, { op: "-", n1: 1, n2: 2 }, { op: "-", n1: 11, n2: 5 }]);




/*
Assignment 3: Function, Array, and Object
Complete the function below to calculate the average price of all the products.
*/

/*
function average(list) {
  let sum = 0;
  let productCount = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].name == 'Product 1' || 'Product 2' || 'Product 3') {
      sum += list[i].price;
      productCount++;
    }
  }
  if (productCount == 0) {
    return 0; // prevent division by 0
  }
  let avg = sum / productCount;
  return avg;
}

console.log(average([{ name: "Product 1", price: 100 }, { name: "Product 2", price: 700 }, { name: "Product 3", price: 250 }
]));

*/



function avg(data) {
    let sum = 0;
    let productCount = 0;
    for (let i = 0; i < data.products.length; i += 1) {
      if (data.products[i].name == 'Product 1' || 'Product 2' || 'Product 3') {
        sum += data.products[i].price;
        productCount++;
      }
    }
    if (productCount == 0) {
      return 0; // prevent division by 0
    }
    let avg = sum / productCount;
    return avg;
  }

avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100
    },
    {
      name: "Product 2",
      price: 700
    },
    {
      name: "Product 3",
      price: 250
    }
  ]
})
console.log(avg({size: 3,products: [{name: "Product 1",price: 100},{name: "Product 2",price: 700},{name: "Product 3",price: 250}]}))
