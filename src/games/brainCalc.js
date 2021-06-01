export const rule = 'What is the result of the expression?';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

export default function brainCalc(maxNumber = 10) {
  // Choose random array from `operations`;
  const randomOperation =
    operations[Math.floor(Math.random() * operations.length)];
  // const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const [operationSign, operationMethod] = randomOperation;
  const num1 = Math.round(Math.random() * maxNumber);
  const num2 = Math.round(Math.random() * maxNumber);
  const correctAnswer = operationMethod(num1, num2).toString();
  const question = `${num1} ${operationSign} ${num2}`;
  return [question, correctAnswer];
}
