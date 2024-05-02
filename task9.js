// console.log(Date())//full date
// console.log(Date.now())
// dt=new Date();
// 
// console.log(`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`)

// console.log(dt.getDate(),dt.getMonth(),dt.getYear(),dt.getDay());
// dt1=new Date('oct 27,2002,')
// 1.Display Current Date and Time: Write a JavaScript function to display the current date and time in the format "YYYY-MM-DD HH:MM:SS".

// let dt=new Date();
// console.log(`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`)

// 2.Calculate Age: Create a function that takes a birthdate as input and returns the age of the person in years.
// i/p : year => 1990-05-15
// o/p : Age => 33

// let date=new Date("1990-05-15")
// let year=date.getFullYear()
// let date1=new Date()
// let year1=date1.getFullYear()
// if(date.getMonth()<date1.getMonth())
// console.log(year1-year)
// else
// console.log(year1-year-1)

// 3.Calculate Days Until Next Birthday: Write a function that takes a birthdate as input and calculates the number of days until the next birthday.
// i/p : year => 1990-05-15
// o/p : Days until next birthday:  15
// let date1=new Date()
// let date=new Date("1990-04 -15")
// if(date.getMonth()<date1.getMonth())
// console.log(12-(date1.getMonth()-date.getMonth()),"months",Math.abs(date1.getDate()-date.getDate()),"days")
// else 
// console.log(Math.abs(date1.getMonth()-date.getMonth()),"months",Math.abs(date1.getDate()-date.getDate()),"days")

// 4.Calculate Days Between Two Dates: Create a function that takes two dates as input and calculates the number of days between them.
// i/p : "2024-04-20", "2024-04-30"
// o/p : Days between two dates:  10

d1= new Date("2024-04-20");
d2=new Date("2024-04-30");
console.log(`${Math.abs(d1.getDate()-d2.getDate())} days`)

// 5.Determine Leap Year: Write a function that takes a year as input and returns true if it's a leap year, otherwise false.
// i/p : 2024
// o/p : Is leap year?  True