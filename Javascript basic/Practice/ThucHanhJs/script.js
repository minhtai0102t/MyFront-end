// alert("Hello");
// prompt("How old are you?");
// confirm("Are you really want to delete it?");

// let a = 5, b = 6;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a/0);
// let c = "hello";
// console.log(c/2);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// function showMessage1(){
//     alert("Hello");
// }
// function showMessage2(firstName,lastName){
//     alert("Hello" +" "+ firstName + " " + lastName);
// }
// showMessage("A","David");
// showMessage("B","John");
// showMessage("C","Jame","Daniel");
// showMessage("Bill");
// showMessage();

// function showMessage3(firstName,lastName){
//     alert("Hello" + arguments[0] + " " + arguments[1]);
// }

// showMessage3("A","Mrr");
// showMessage3(100,200);
//Arguments vẫn đúng khi không có tham số

// function showMessage4(){
//     alert("Hello" + arguments[0] + " " + arguments[1]);
// }
// showMessage4("A","B");

// function Sum(val1,val2){
//     return val1 + val2;
// }
// var result = Sum(10,20);
// function Multiply(val1,val2){
//     console.log(val1*val2);
// }


// var add = function sum(val1,val2){
//     return val1+val2;
// }
// var result1 = add(10,20);

// console.log(result1);

// var showMessage = function(){
//     alert("hello");
// }
// let num1 = 1,num2 = 2;
// let result2 = add(num1,num2);

//Debugging with console.log
// console.log(num1+"+"+num2 +"="+result2);
// console.info(num1+"+"+num2 +"="+result2);
// console.warn(num1+"+"+num2 +"="+result2);
// console.error(num1+"+"+num2 +"="+result2);

//Debugging with console.table

// class Band{
//     constructor(firstName, lastName, roll){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.roll = roll;
//     }

// }
// var zack = new Band("Zack","Wyld",1);
// var ozzy = new Band("Ozzy","Ourse",2);
// var ronie = new Band("Ronie","Dio",3);
// console.table([zack,ozzy,ronie]);

// function func1(){
//     func2();
//     console.log("hello");
// }
// function func2(){
//     func3();
//     console.log("hello");

// }
// function func3(){
//     console.trace();
// }


// if(1<2){
//     alert("1 nho hon 2");
// }
// else{
//     alert("false");
// }
// var x,y;
// x = 2,y = 2;
// switch(x+y){
//     case 4:{
//         alert("x and y sum to 4");
//         break;
//     }
//     case 6:{
//         alert("x and y sum to 8");
//         break;
//     }
//     default:
//         alert("No match");
// }

// let empty = {};

// let person = {
//     firstName: "Tom",
//     lastName: "Jerry"
// };
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person["firstName"]);
// console.log(person["lastName"]);

// let address = {
//     'building number': 3960,
//     street: "North 1st",
//     state: "La",
//     country: "USA"
// };
// console.log(address["building number"],address.country,address.state,address.street);

// person.firstName = "Alice";
// console.log(person);
// person.age = 25;
// console.log(person);

// let employee = {
//     firstName: "Pertor",
//     lastName: "Dor",
//     employeeId: 1,
//     great(){
//         console.log("No Yes");
//     },
//     getFullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log('ssn' in employee);
// console.log("employeeId" in employee);

// for(const key in person){
//     console.log(key);
// }
// person.greet = function(){
//     console.log("Add function");
// }
// person.greet();

// function free(){
//     console.log("Free");
// }
// person.free = free;
// person.free();


