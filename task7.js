// 1.indexof
function indexofStr(arr1,str){
    res=arr1.indexOf(str);
    return res;
}
console.log(indexofStr(["sa","th","vi","ka"],"ka"));
console.log(indexofStr(["sa","th","vi","ka"],"saaa"));


// 2.slice 
function substringFromSlice(arr2,num1,num2){
    res2=arr2.slice(num1,num2);
    console.log(res2)
}
substringFromSlice(["s","a","t","h","v","i","k","a"],2,6)

// // 3..
// book={title:,author,year}
// function objects(books){
// }
// objects()


// 4...create and display an array
student={};
student.name="sathvika"
student.age=21;
student.grade="A"
console.log(student);
console.log("name",student.name)
console.log("age",student.age)
console.log("grade",student.grade)

// 5.book object
book={title:"wings of fire",author:"kalam",pages:"115"}
console.log(book);
book.categeory="fiction"
console.log(book)