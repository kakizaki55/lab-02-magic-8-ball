import { answers, randomNumber} from './answer.js';


const ballAnswer = document.getElementById('eight-ball-answer');
const askButton =document.getElementById('ask-button');
const questionArea = document.getElementById('quest');
const the8Ball = document.getElementById('the-8-ball');
let askCount = 0;

// function randomNumber(maxNum){
//   return Math.floor(Math.random()* maxNum);
// }
// let randomIndex = randomNumber()
// console.log(randomIndex);
// console.log(answers[randomIndex])
askButton.addEventListener('click', ()=>{
  if(askCount === 7){
    ballAnswer.textContent = 'okay thats it!! you dont get to ask a question anymore..'
    askButton.style.visibility ='hidden';

  } else if (askCount === 6){
    ballAnswer.textContent = 'okay you get one more chance'
    askCount ++;
  } else if (askCount === 4){
    ballAnswer.textContent = 'for reals, come on you have to ask a question'
    askCount ++;

  } else if (askCount === 2){
    ballAnswer.textContent = 'come on...really? ask me a question.'
    askCount ++;
  
  } else if (!questionArea.value){
    ballAnswer.textContent = 'please ask a question..'
    askCount ++;

  } else {
    let randomIndex = randomNumber(answers.length);
    ballAnswer.textContent = answers[randomIndex].answer;
    questionArea.value = '';
    the8Ball.style.background = answers[randomIndex].color;
  }
});


// ballAnswer.textContent = answers[randomIndex] 



