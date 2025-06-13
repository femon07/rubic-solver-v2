import { describe, it, expect } from 'vitest';
import { Cube } from '../src/lib/Cube';

describe('Cube', () => {
  it('is solved by default', () => {
    const cube = new Cube();
    expect(cube.isSolved()).toBe(true);
  });
});
