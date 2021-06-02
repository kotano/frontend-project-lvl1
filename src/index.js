import readlineSync from 'readline-sync';

import { greet, getName, showWrongAnswer } from './cli.js';

export default function play(game, rule = '') {
  greet();
  const username = getName();
  console.log(rule);
  let winStreak = 0;
  while (winStreak < 3) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      winStreak += 1;
    } else {
      showWrongAnswer(userAnswer, correctAnswer);
      console.log(`Let's try again, ${username}`);
    }
  }
  console.log(`Congratulations, ${username}!`);
}
