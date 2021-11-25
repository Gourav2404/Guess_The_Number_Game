'use strict';
//
// console.log(document.querySelector('.message').textContent);
//
// document.querySelector('.message').textContent = 'Correct Number' ;
//
// document.querySelector('.number').textContent = 20 ;
// document.querySelector('.score').textContent = 20 ;
//
// document.querySelector('.guess').value = 23 ;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random()*20)+1;

console.log(secretnumber);
let highscore = 0 ;
let score = 20 ;

document.querySelector('.check').addEventListener
('click' , function(){
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  if(!guess){
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess == secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore){
      highscore = score ;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess < secretnumber) {
    if(score > 0){
      document.querySelector('.message').textContent = 'number is too Low';
      score--;
      document.querySelector('.score').textContent = score ;
    }else{
      document.querySelector('.message').textContent = 'You lose the game';
    }
  } else if (guess > secretnumber) {
    if(score > 1){
      document.querySelector('.message').textContent = 'number is too high';
      score--;
      document.querySelector('.score').textContent = score ;
    }else{
      document.querySelector('.message').textContent = 'You lose the game';
    }

  }
});

document.querySelector('.again').addEventListener("click" , function(){
    score = 20;
    secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    console.log(secretnumber);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    //location.reload()
});
