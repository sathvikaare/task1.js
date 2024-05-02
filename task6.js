// // 1.length of array without length method
// function arrayLength(arr){
//     n=arr.push();
//     console.log(n)
// }
// arrayLength([1,2,3,4,5])


// // 2...At(array indes at a given postn)
// function getElementAtIndex(arr1,index){
//     res=arr1.at(index);
//     return res;
// }
// console.log(getElementAtIndex([10,20,30,40,50],2));


// // 3..push(add element to array end).....
// function addToArrayEnd(arr2,e1){
//     arr2.push(e1)
//     console.log(arr2);
// }
// addToArrayEnd([1,2,3],4);


// // 4.pop..(removes last element from array)
// function removeLastElement(arr3){
//     arr3.pop()
//     console.log(arr3)
// }
// removeLastElement([1,2,3,4,5]);


// // 5.shift(remove 1st element from array).....
// function removeFirstElement(arr4){
//     arr4.shift();
//     console.log(arr4);
// }
// removeFirstElement([1,2,3,4,5]);


// // 6.unshift(add element to array at start)...
// function addToArrayStart(arr5,e5){
//     arr5.unshift(e5);
//     console.log(arr5);
// }
// addToArrayStart([2,3,4,5],1);


// // 7.concat..(concat two arrays)...
// function concatArrays(arr6,arr7){
//     res2=arr6.concat(arr7);
//     console.log(res2);
// }
// concatArrays([1,2,3],[4,5,6]);


// // 8.Flat..(used to flatten the array in level provide in flat)
// function flattenArray(nestedArray){
//     res3=nestedArray.flat(1);
//     console.log(res3);
// }
// flattenArray([[1,2],[3,4],[5,6]]);


// // 9.join..(used to merge array element into string)
// function joinArrayElements(arr8,seperator){
//     res4=arr8.join(",");
//     console.log(res4);
// }
// joinArrayElements(["apple","banana","orange"],",");


// // 10.delete...(delete an elemnt according to the index value)
// function deleteElement(arr9,indexvalue){
//     delete arr9[indexvalue];
//     console.log(arr9);
// }
// deleteElement(["a","b","c","d","e"],2);


// // 11.to string (rep array into string)
// function arrayToString(arr10)
// {
//    res5= arr10.toString()
//    console.log(res5)
// }
// arrayToString([1,2,3,4,5]);

// // 12. isarray(array or not)
// function isArray(value){
//     res6=Array.isArray(value);
//     console.log(res6);
// }
// isArray([1,2,3,4,5]);


var a=10;
function add(){
    console.log(a);
    a=20;
}
add();
add();
add();