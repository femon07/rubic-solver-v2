export type Move = 'U'

export class Cube {
  private stickers: string[]
  private static solvedState = [
    ...Array(9).fill('U'),
    ...Array(9).fill('R'),
    ...Array(9).fill('F'),
    ...Array(9).fill('D'),
    ...Array(9).fill('L'),
    ...Array(9).fill('B'),
  ]

  constructor() {
    this.stickers = [...Cube.solvedState]
  }

  move(moveCode: Move): void {
    if (moveCode === 'U') {
      this.rotateU()
    } else {
      throw new Error(`Unsupported move: ${moveCode}`)
    }
  }

  private rotateU(): void {
    const s = this.stickers
    const face = [s[6], s[3], s[0], s[7], s[4], s[1], s[8], s[5], s[2]]
    for (let i = 0; i < 9; i++) {
      s[i] = face[i]
    }

    const temp = [s[18], s[19], s[20]]
    s[18] = s[36]
    s[19] = s[37]
    s[20] = s[38]

    s[36] = s[45]
    s[37] = s[46]
    s[38] = s[47]

    s[45] = s[9]
    s[46] = s[10]
    s[47] = s[11]

    s[9] = temp[0]
    s[10] = temp[1]
    s[11] = temp[2]
  }

  isSolved(): boolean {
    return this.stickers.every((c, i) => c === Cube.solvedState[i])
  }
}
