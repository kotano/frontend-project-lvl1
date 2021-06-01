const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

export const rule = 'Find the greatest common divisor of given numbers.';

export default function brainGcd(maxNumber = 100) {
  const num1 = Math.round(Math.random() * maxNumber);
  const num2 = Math.round(Math.random() * maxNumber);
  const correctAnswer = gcd(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, correctAnswer.toString()];
}
