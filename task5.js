// 1......revere a string
str="sathvika"
str2=""
for(i=str.length-1;i>=0;i--){
    str2+=str[i]
}
if(str2==str){
    console.log(`${str} is a palindrome`);
}
else{
    console.log(`${str} is not a palindrome`);
}


// 2.replace 1st letr with Uppercase......
str3="hi good morning";
str4=str3.split(" ")
console.log(str4);
str6=""
for(i=0;i<str4.length;i++){
    str5=str4[i].replace(str4[i][0],str4[i][0].toUpperCase());
    str6=str6+str5+" ";
}
console.log(str6);


// 3.count no of occurances of each word......
str="hello world";
count=0;
for(i=0;i<str.length;i++){
    if(str[i]=="l"){
        count++;
    }
}
console.log(count);
// 4....
str="I'm sathvika from Nizamabad"
str1=str.split(" ");
str2=""

for(i=str1.length-1;i>=0;i--){
    str2=str2+str1[i]+" ";

}
console.log(str2);


// 6....count no of characters in a string
s="sath  vika"
count=0;
for(i=0;i<s.length;i++){
    count++;
}
console.log(`No of characters in string are :${count}`);

// 7.convert string to uppercase......
s="Sathvika Are"
s1=s.toUpperCase();
console.log(s1);


// 8.contains a substring or not...
s1="hi everyone we are to celebrate"
s2=s1.includes("we");
console.log(s2);


// 9.find index of substring.......
s="hi evry one welcome to 10k"
console.log(s.indexOf("on"))

// 10.replace substring with another string..........
str="hi every one i'm sathvika"
str2=str.replace(/sathvikA/i,"sankeerthan");
console.log(str2)

// 11.trim white space from a string.........
str="     Amazon is hiring freshers    ";
str2=str.trim();
console.log(str2)

// 12.split a string into array .... 
str="we are hiring for technical intern"
str2=str.split(" ");
console.log(str2);


// 13.concate two strings.....
str1="I'm are"
str2="sathvika"
str3="a student"
str1=str1.concat(" ",str2);
str1=str1.concat(" I'm");
str1=str1.concat(` ${str3}`);
console.log(str1);


// 14.string starts with substring....
s="we are here";
s1=s.split(" ");
s2=s1[0];
res=s.substring(0,2);
if(s2==res){
    console.log(`substrins is at staring of the string`);
}
else{
    console.log(`substrins is not at staring of the string`);
}



// 15.substring ends with in the string or not.......
s="we are here";
s1=s.split(" ");
s2=s1[s1.length-1];
res=s.substring(7)
console.log(res);
if(s2==res){
    console.log("given substring is ending of the string");
}
else{
    console.log("given substring is  not the ending of the string");
}


// 16.get a substring....
s="I'm here at the end";
console.log(s.substring(4,6)) 


// 17.reverse a string.......
s="sathvika are"
s1=""
for(i=s.length-1;i>=0;i--){
    s1=s1+s[i];

}
console.log(s1)

// 18.lowercase....
s="HelLO WoRlD";
s1=s.toLowerCase();
console.log(s1);

// 19.string is empty or not....
s=""
s1=" ";
if(s1.length==0){
    console.log("the given string is empty");
}
else{
    console.log("Given string is not empty");
}

// 20.string contains only digits or not
