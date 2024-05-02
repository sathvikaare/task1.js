// fizz buzzz------------------------
for(var i=1;i<=15;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
     else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}     

// greatest number--------------

      let a=+prompt();
      let b=+prompt();
      let c=+prompt();
      if(a>b){
            if(a>c){
                  console.log("a is greatest");
            }
            else{
                  console.log("c is greatest");
            }
      }
      else{
            if(b>c){
                  console.log("b is greatest");
            }
            else{
                  console.log("c is greatest");
            }
      }
      a>b ? (a>c)?console.log("a is greater"):console.log("c is greater") : (b>c)?console.log("b is greater"):console.log("c is greater");
// vowel or consonant---------------------
      let n=prompt();
      switch(n){
            case 'a':
                  console.log("is a vowel");
                  break;
            case 'e':
                  console.log("is a vowel");
                  break; 
            case 'i':
                  console.log("is a vowel");
                  break; 
            case 'o':
                  console.log("is a vowel");
                  break;
            case 'u':
                  console.log("is a vowel");
                  break; 
            default:
                  console.log("it is a consonant");   


      }
// current time------------------

      n1=+prompt("enter the current time");
      if(n1>=5 && n1<=11){
            console.log("Good morning");
      }
      else if(n1>=12 && n1<=17){
            console.log("Good Afternoon");
      }
      else if(n1>=18 && n1<=22){
            console.log("Good Evening");
      }
      else if((n1>=23 && n1<=24) || (n1>=1 && n1<=4)){
            console.log("Good night");
      }
      else{
            console.log("enetered value is incorrect ,please enter value between 1 to 24");
      }
// login using username password----------

      username=prompt("enter username");
      password=prompt("enter password");
       if(username =='admin' && password =="admin123"){
            console.log("Login Successful");
       }
       else{
            console.log("login failed");
       }

       