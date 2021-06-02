export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
  return num > 1;
};

export default function brainPrime(maxNumber = 100) {
  const num = Math.round(Math.random() * maxNumber);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
}
