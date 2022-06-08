'use strict';

thinkNum = 13;
let wrongAns = [];

userAns = prompt(`Think of a number between 1 and 15`);


while(userAns != thinkNum)
{
  wrongAns.push(1)
  alert(`I'm sorry ${userAns} was not the number please try again!`)
    userAns = prompt("Think of a number between 1 and 15");

}
alert(`That's right! ${userAns} was correct!`);

var name = window.prompt("Hey, you have a name?")
alert("Hey " + name + ", nice to chat with you!")
//

userAns = prompt("I'd like to ask you some questions, is that ok?");
alert("Ok, let's move along please!");
//

 userAns = prompt("Am I a guy?").toLowerCase();

 while(userAns != "yes")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Am I a guy?");
}
alert("That's right!");
//

userAns = prompt("Do I like dogs?").toLowerCase();

 while(userAns != "yes")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Do I like dogs?");
}
alert("Wow, how'd you know so much about me!?");
//

userAns = prompt("Can anyone grow long hair?").toLowerCase();

 while(userAns != "yes")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Can anyone grow long hair?");
}
alert("Wow. Ok, next question!");
//

userAns = prompt("Is ther 100 letters in the Alphabet?").toLowerCase();

while(userAns != "no")
{
  wrongAns.push(1)
    alert('Incorrect...');
    userAns = prompt("Is there 100 letters in the Alphabet?");
}
alert("Wow...Just wow!")
//
 userAns = prompt("Do you speak another language?").toLowerCase();
alert("Ok, that's all I have to ask, " + name + " Thank you!")
//

var questions = 7;

alert(`You got an answer wrong ${wrongAns.length} times out of ${questions}!`);

//
