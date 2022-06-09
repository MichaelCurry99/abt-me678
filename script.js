// 'use strict';

thinkNum = 13;
let wrongAns = [];

var loggedin = false;
var attempt = 5;
while(!loggedin && attempt > 0){
var userAns = prompt("Think of a number between 1 and 15").toLowerCase();
 if(userAns=="13" || userAns== "Thirteen"){
   loggedin = true;
 }
 else
 {
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
 {
  wrongAns.push(1);
   alert('The answer is yes');
 }
}
}
// userAns = prompt(`Think of a number between 1 and 15`);


// while(userAns != thinkNum)
// {
//   wrongAns.push(1)
//   alert(`I'm sorry ${userAns} was not the number please try again!`)
//     userAns = prompt("Think of a number between 1 and 15");

// }
// alert(`That's right! ${userAns} was correct!`);
//
var name = window.prompt("Hey, you have a name?")
alert("Hey " + name + ", nice to chat with you!")
//

userAns = prompt("I'd like to ask you some questions, is that ok?");
alert("Ok, let's move along please!");
//
var loggedin = false;
var attempt = 5;
while(!loggedin && attempt > 0){
var userAns = prompt("Am I a guy?").toLowerCase();
 if(userAns=="yes" || userAns== "Yes"){
   loggedin = true;
 }
 else
 {
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
 {
  wrongAns.push(1);
   alert('The answer is yes');
 }
}
}

 // while(userAns != "yes")

// // //  window.addEventListener("load",setup,false);
// // //  var counter = 0;
// // //  function setup() {
// // //     for(var i = 0; i < 3; i++) {
// // //         showAlert();
// // //     }
// // //  }
 
// // //  function showAlert() {
// // //     if(counter == 0) {
// // //         alert("Executed once");
// // //         counter++;
// // //     } else if(counter > 2) //counter is bigger than 2, so it got executed more than once {
// // //         counter = 0; //reset the counter to 0
// // //     }          

// {
//   wrongAns.push(1)
//     alert('Incorrect...');
//     userAns = prompt("Am I a guy?");

// }
 // alert("That's right!"); // wont continue
//
// userAns = prompt("Do I like dogs?").toLowerCase();
var loggedin = false;
var attempt = 5;
while(!loggedin && attempt > 0){
var userAns = prompt("Do I like dogs?").toLowerCase();
 if(userAns=="yes" || userAns== "Yes"){
   loggedin = true;
 }
 else
 {
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
 {
  wrongAns.push(1);
   alert('The answer is yes');
 }
}
}

//  while(userAns != "yes")
// userAns = prompt("Do I like dogs?").toLowerCase();

//  while(userAns != "yes")
// {
//   wrongAns.push(1)
//     alert('Incorrect...');
//     userAns = prompt("Do I like dogs?");
// }
// alert("Wow, how'd you know so much about me!?");
// //

var loggedin = false;
var attempt = 5;
while(!loggedin && attempt > 0){
var userAns = prompt("Can anyone grow long hair?").toLowerCase();
 if(userAns=="yes" || userAns== "Yes"){
   loggedin = true;
 }
 else
 {
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
 {
  wrongAns.push(1);
   alert('The answer is yes');
 }
}
}

// userAns = prompt("Can anyone grow long hair?").toLowerCase();

//  while(userAns != "yes")
// {
//   wrongAns.push(1)
//     alert('Incorrect...');
//     userAns = prompt("Can anyone grow long hair?");
// }
// alert("Wow. Ok, next question!");
//

var loggedin = false;
var attempt = 5;
while(!loggedin && attempt > 0){
var userAns = prompt("Is ther 100 letters in the Alphabet?").toLowerCase();
 if(userAns=="no" || userAns== "No"){
   loggedin = true;
 }
 else
 {
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
 {
  wrongAns.push(1);
   alert('The answer is no');
 }
}
}

// userAns = prompt("Is ther 100 letters in the Alphabet?").toLowerCase();

// while(userAns != "no")
// {
//   wrongAns.push(1)
//     alert('Incorrect...');
//     userAns = prompt("Is there 100 letters in the Alphabet?");
// }
// alert("Wow...Just wow!")
//

// //
//  userAns = prompt("Do you speak another language?").toLowerCase();
// alert("Ok, thatvar loggedin = false;
var attempt = 5;
while(!loggedin && attempt > 0){
var userAns = prompt("Do you speak another language?").toLowerCase();
 if(userAns=="Yes" || userAns== "No"){
   loggedin = true;
 }
 else
 {
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
 {
  wrongAns.push(1);
   alert('Well...I have no response');
 }
}
}
//That's all I have to ask, " + name + " Thank you!")
// //
let thisArray = [4,6,8,10];

var loggedin = false;
var attempt = 5;
while(!loggedin && attempt > 0){
var userAns = prompt("How many fingers did I have up? Even numbers between 2 and 12.").toLowerCase();
 if(userAns== thisArray){
   loggedin = true;
 }
 else
 {
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0)
 {
  wrongAns.push(1);
   alert('Well...I have no response');
 }
}
}

var questions = 7;

alert(`You got an answer wrong ${wrongAns.length} times out of ${questions}!`);

//

