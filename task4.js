
// 1.case reverse............
 str="hElLo WorLD"
 str2=""
 for(i=0;i<str.length;i++){
    if(str[i]>="A" && str[i]<="Z"){
        str2+=str[i].toLowerCase();
    }
    else if(str[i]>="a" && str[i]<="z"){
        str2+=str[i].toUpperCase();
    }
    else{
        str2=str2+" "
    }
 }
 console.log(str2);

// 2..count of vowels and consonents

// str="hElLo WorLD"
// count=0;
// count1=0;
// for(i=0;i<str.length;i++){
//     if(str[i]=="a" || str[i]=="A"){
//         count++;
//     }
//     else if(str[i]=="e" || str[i]=="E"){
//         count++;
//     }
//     else if(str[i]=="i" || str[i]=="I"){
//         count++;
//     }
//     else if(str[i]=="o" || str[i]=="O"){
//         count++;
//     }
//     else if(str[i]=="u" || str[i]=="U"){
//         count++;
//     }
//     else if(str[i]==" "){

//     }
//     else{
//         count1++
//     }
// }
// console.log(`No of vowels ${count}`);
// console.log(`No of consonants ${count1}`);
