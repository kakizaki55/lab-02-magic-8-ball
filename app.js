import { answers } from './answer.js';


const ballAnswer = document.getElementById('eight-ball-answer');
const askButton =document.getElementById('ask-button');
const questionArea = document.getElementById('quest');

function randomNumber(){
  return Math.floor(Math.random()* answers.length);
}

// let randomIndex = randomNumber()

// console.log(randomIndex);
// console.log(answers[randomIndex])
askButton.addEventListener('click', ()=>{

  let randomIndex = randomNumber()
  ballAnswer.textContent = answers[randomIndex] 
  questionArea.textContent = '';
});


// ballAnswer.textContent = answers[randomIndex] 



