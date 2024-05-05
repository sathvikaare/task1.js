// 1) Take an arr = [1,2,3,4,5] print the array using array iteration methods
// <--forEach
arr = [1,2,3,4,5]
arr.forEach(function(element){
    console.log(element)
});

// <--.map
res=arr.map(element=>element);
console.log(res)
// <--filter
res1=arr.filter(element=>element)
console.log(res1)
// 2)arr[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}];
// output:prashanth,teja 
// need to filter the array whose age is greater than 18
arr=[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}]
res2=arr.filter((x)=>{
    if(x.age>18)
    console.log(x.name)
})


// 3) arr=[15,2,3,22,100] sort the array without using sort() method only using array iteration methods.
// output:[2,3,15,22,100]
arr=[15,2,3,22,100] 



// 4)arr=[1,2,3,4,5] sum of the array elements using reduce()
// output: 15
arr=[1,2,3,4,5]
res4=arr.reduce((acc,value)=>{
    return acc+value
})
console.log(res4)


// 5)arr ={13,67,31,45,11,10,77,88] check whether every element in the array is greater than 18 or not using 
// every method perform the same input using some() method
// <---every
arr =[13,67,31,45,11,10,77,88]
res5=arr.every(x=>x>18)
console.log(res5)
// <..some
res6=arr.some(x=>x>18)
console.log(res6)
