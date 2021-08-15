var readlineSync = require('readline-sync');
var score = 0;
var level = 0;
// welcome your user
var userName = readlineSync.question('Enter Your Name : ');
console.log('Hello!! ' + userName + ' Welcome To The Quiz. ' + '[Do You knoow Irfan ?]');

// Functions
function play(que,ans){
  var userAns = readlineSync.question(que + " Ans = ");
  // Branching
  if (userAns.toUpperCase() === ans.toUpperCase()){
    score++;
    console.log(userName + " Your Answer Is Correct, Hurray!!!");
  } else {
    score--;
    console.log(userName + " Your Answer Is Wrong, Sorry!!!");
    console.log('The Correct Answer is : ' + '""' + ans + '""');
  }
  console.log("Your Current Score is " + score);
  if (score == 2 || score == 10){
  level++;
  console.log("CONGRATULATIONS YOU HAVE REACHED LEVEL: " + level);
}
  console.log("----------------------");
}

// Array Of Objects (quiz questions).
var questions = [{
  que: "Where do I live ? ",
  ans: "Hyderabad"
},{
  que: "Where do I study ? ",
  ans: "Vit"
},{
  que: "What do I study ? ",
  ans: "CSE"
},{
  que: "Who is my favourite Super hero ? ",
  ans: "Batman"
},{
  que: "What is favourite video game ? ",
  ans: "Forza Horizon"
},{
  que: "What is my favourite sport ? ",
  ans: "Football"
},{
  que: "What is my favourite movie ? ",
  ans: "Sultan"
}];

// Loop For Acsessing The Array And Calling "play" Function. 
for (var v=0;v<questions.length;v++){
  var currentQues = questions[v];
  play(currentQues.que,currentQues.ans);
}

console.log("Your Final Score is : " + score);
