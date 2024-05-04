// 1.For each:the forEach method is used to iterate over elements in an array. It takes a callback function as an argument, which is executed for each element in the array.
// The forEach method does not create a new array; it simply iterates over the existing array.

// syntax:
array.forEach(function(element) {
     console.log(element)
});

ex:let array = [ 2, 4, 6];

array.forEach(function(element) {
  console.log(element);
});

// o/p:
// 2
// 4
// 6

// 2.Map
// the map method is used to create a new array by applying a function to each element of an existing array. It wont modify the original array but instead returns a new 
// array as a results
// ex:
let arr = [10,20,30,40];

let res = arr.map(function(element) {
  return element * 5;
});
console.log(res); 
o/p:
['50','100','150','200','250']

// 3.filter() method creates a new array filled with elements that pass a test provided by a function.filter method does not execute the function for empty elements.
// it does not change the original array.
// ex:
let arr = [10,20,30,40];
res=arr.filter((value)=>{
    return value>15})
console.log(res)
o/p:
[20,30,40]

// 4.reduce 
// arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array.used to get singlr value from an array like sum mul sub etc//not used in strings, objects 
// it takes one extra parameter,but for foreach, Filter and map  we take three params in call back function
let res=arr.reduce((acc,value)=>{
    return value*acc;
},2)
console.log(res)

// 5.some
// some, loops over the array elements left to right.For each iteration, it calls the given function with the current array element as its 1st argument.
// The loop continues until the function returns a truthy value. And in that case some returns true – otherwise it returns false.

// ex:
arr4=[2,32,25,6,15,18]
res4=arr4.some(function(x){
   return x==20
})
console.log(res4)

// o/p:false

// 6.every
// every ,loops over the array elements left to right.For each iteration, it calls the given function with the current array element as its 1st argument.
// The loop continues until the function returns a falsy value. And in that case every returns false – otherwise it returns true.
// ex:
arr4=[32,25,6,15,18,55,]
res=arr4.every(x=>x>5)
console.log(res)

// o/p:
// true

// 7.find
// The find() method returns the value of the first element that passes a test.The method executes a function for each array element and returns undefined if no elements are found.and doesnot not execute the function for empty elements.it does not change the original array.

// ex:
arr4=[2,25,12,15,18,50]
res=arr4.find(x=>x>15)
console.log(res)

// o/p:25

// 8.sort
// The sort() method sorts the elements of an array.it overwrites the original array.it sorts the elements as strings in alphabetical and ascending order.

// ex:
arr4=[2,25,12,15,18,50]
res1=arr4.sort((a,b)=>a-b);
console.log(res1)//ascending order
o/p:[2,12,15,18,25,50]

res2=arr4.sort((a,b)=>b-a);
console.log(res2)//descending order
o/p:[50,25,18,15,12,2]

