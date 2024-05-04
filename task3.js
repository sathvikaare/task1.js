1.What does the break statement do in JavaScript?
A.The break statement breaks out of a switch or a loop. In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch.  in a loop,
 it breaks out of the loop and continues executing the code after the loop .


2.Explain the continue statement in JavaScript.
The continue statement is used to skip the current iteration of any loop and bring the control to the beginning of the iteration. The statements following the continue statement are skipped and the iteration starts again.
A.

3.What is the difference between break and continue in JavaScript?
A.The break statement terminates the loop immediately, and execution resumes after the loop.
The continue statement skips the current iteration of the loop and continues with the next iteration.


4.How can you use break to exit out of a loop in JavaScript?
A.it comes out of loop when it find a number divisible by both 5 and 3. 
for(n=5;n>=50;n++){
if(n%5==0 && n%3==0){
	break;
	}
}


5.Give an example of using continue in a loop.
A.it skips the current iteration in a loop, and starts next iteration  when it find a number divisible by both 5 and 3. 
for(n=5;n>=50;n++){
if(n%5==0 && n%3==0){
	continue;
	}
}



6.Write a JavaScript loop that iterates from 1 to 10 but stops execution when it reaches 5 using the break statement.
A.
for(n=1;n>=10;n++){
if(n==5){
break;
}
console.log(i);
}


7.Write a JavaScript program to iterate through an array of numbers and continue to the next number if the current number is even using the continue statement.
A.
a=[3,5,6,8,7,2,1,0,5]
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        continue;
    }
    console.log(a[i]);
}


8.Write a JavaScript program to find the first 5 multiples of 3, using a loop. Use the break statement to exit the loop after finding 5 multiples.
A.
count=0;
for(i=1;i<20;i++){
    if(i%3==0){
        count++
        console.log(i)
    }
    
    if(count>=3){
        break;
    }
}

9.Write a JavaScript program to iterate through numbers from 1 to 10. Print all numbers except those divisible by 3, using the continue statement.
A.for(i=1;i<=10;i++){
    if(i%3==0){
        continue;
    }
    console.log(i);
}
10.Write a JavaScript program to find and print all even numbers between 1 and 20, using a loop. Use the continue statement to skip odd numbers.
A.
for(i=1;i<=20;i++){
    if(i%2!=0){
        continue;
    }
    console.log(i);
}


11.Write a JavaScript program to iterate through an array of names. Print all names except those that start with the letter 'A', using the continue statement.
A.
a=["are","sathvika","sudha","karthik","akhila"];
for(i=0;i<a.length;i++){
    
        if(a[i][0]=="a"){
            continue
        }
        console.log(a[i]);
    }