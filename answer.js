export const answers = [
  
    {answer: 'It is certain.',class:'good'},
    {answer: 'It is decidedly so.', color: '#3B8270'},
    {answer: 'Without a doubt.', color: '#3B8270'},
    {answer: 'Yes definitely.', color: '#3B8270'},
    {answer: 'You may rely on it.', color: '#3B8270'},
    {answer: 'As I see it, yes.', color: '#3B8270'},
    {answer: 'Most likely.', color: '#3B8270'},
    {answer: 'Outlook green.', color: '#3B8270'},
    {answer: 'Yes.', color: '#3B8270'},
    {answer: 'Signs point to yes.', color: '#3B8270'},

    {answer: 'Reply hazy, try again.', color: '#F0D451',},
    {answer: 'Ask again later.', color: '#F0D451'},
    {answer: 'Better not tell you now.', color: '#F0D451'},
    {answer: 'Cannot predict now.', color: '#F0D451'},
    {answer: 'Concentrate and ask again.', color: '#F0D451'},

    {answer: 'Dont count on it.', color: '#B5130E'},
    {answer: 'My reply is no.', color: '#B5130E'},
    {answer: 'My sources say no.', color: '#B5130E'},
    {answer: 'Outlook not so good.', color: '#B5130E'},
    {answer: 'very doubtful.', color: '#B5130E'},

]
export function randomNumber(maxNum){
    return Math.floor(Math.random()* maxNum);
  }