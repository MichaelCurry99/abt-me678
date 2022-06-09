thinkNum = 13;
let wrongAns = [];

var loggedin = false;
var attempt = 4;
while(!loggedin && attempt > 0){
var userAns = prompt("Think of a number between 1 and 3").toLowerCase();
 if(userAns=="2" || userAns== "two"){
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
//
var name = window.prompt("Hey, you have a name?")
alert("Hey " + name + ", nice to chat with you!")
//

userAns = prompt("I'd like to ask you some questions, is that ok?");
alert("Ok, let's move along please!");
//
var loggedin = false;
var attempt = 6;
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

var loggedin = false;
var attempt = 6;
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

var loggedin = false;
var attempt = 6;
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

//

var loggedin = false;
var attempt = 6;
while(!loggedin && attempt > 0){
var userAns = prompt("Is there 100 letters in the Alphabet?").toLowerCase();
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
//
var attempt = 6;
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
// //
let thisArray = [4,6,8,10];

var loggedin = false;
var attempt = 6;
while(!loggedin && attempt > 0){
var userAns = prompt("How many fingers did I have up? Four even numbers between 2 and 12.").toLowerCase();
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

