export const rule = 'What number is missing in the progression?';

const generateSequence = (start, len, offset) => {
  const sequence = [];
  for (let i = 0; i < len; i += 1) {
    sequence[i] = start + offset * i;
  }
  return sequence;
};

export default function brainProgression(maxNumber = 100, maxOffset = 30) {
  const sequenceLength = 10;
  const offset = Math.round(Math.random() * maxOffset);
  const startNumber = Math.round(Math.random() * maxNumber);
  const sequence = generateSequence(startNumber, sequenceLength, offset);
  const missingIndex = Math.floor(Math.random() * sequenceLength);
  const correctAnswer = sequence[missingIndex];
  sequence[missingIndex] = '..';
  const question = sequence.join(' ');
  return [question, correctAnswer.toString()];
}
