import { isEven } from '@nx-garden/is-even';

export function isOdd(x: number): boolean {
  return !isEven(x);
}
