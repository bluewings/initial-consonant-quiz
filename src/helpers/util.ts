import seedrandom from 'seedrandom';
import { getSymbol } from './korean';

function seedshuffle(arr: any[], seed: string) {
  const random = seedrandom(seed);
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export { seedshuffle, getSymbol };
