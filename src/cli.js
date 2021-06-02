import readlineSync from 'readline-sync';

export function greet() {
  console.log('Welcome to the Brain Games!');
}

export function getName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function showWrongAnswer(userAnswer, correctAnswer) {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
  );
}
