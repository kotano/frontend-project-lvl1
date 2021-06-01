export const rule = 'Answer "yes" if the number is even otherwise answer "no".';

export default function brainEven() {
  const question = Math.round(Math.random() * 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
}
