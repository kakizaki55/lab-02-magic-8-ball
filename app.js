import { answers, randomNumber} from './answer.js';


const ballAnswer = document.getElementById('eight-ball-answer');
const askButton =document.getElementById('ask-button');
const questionArea = document.getElementById('quest');

// function randomNumber(maxNum){
//   return Math.floor(Math.random()* maxNum);
// }
// let randomIndex = randomNumber()
// console.log(randomIndex);
// console.log(answers[randomIndex])
askButton.addEventListener('click', ()=>{
  if(questionArea.value === ''){
    ballAnswer.textContent = 'please ask a question..'
  }else{
    let randomIndex = randomNumber(answers.length);
    ballAnswer.textContent = answers[randomIndex];
    questionArea.value = '';
  }
});


// ballAnswer.textContent = answers[randomIndex] 



