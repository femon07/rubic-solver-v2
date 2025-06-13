import { Cube } from '../src/lib/Cube'
import { test, expect } from 'vitest'

test('U face rotated 4 times returns to solved', () => {
  const cube = new Cube()
  cube.move('U')
  cube.move('U')
  cube.move('U')
  cube.move('U')
  expect(cube.isSolved()).toBe(true)
})
