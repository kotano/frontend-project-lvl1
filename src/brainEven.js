import readlineSync from "readline-sync";

import { greet, getName, showWrongAnswer } from "./cli.js";

export default function brainEven() {
  greet();
  const username = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let winStreak = 0;
  while (winStreak < 3) {
    const question = Math.round(Math.random() * 100);
    const correctAnswer = question % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log("Correct!");
      winStreak += 1;
    } else {
      showWrongAnswer(userAnswer, correctAnswer);
      console.log(`Let's try again, ${username}`);
    }
  }
  console.log(`Congratulations, ${username}`);
}
