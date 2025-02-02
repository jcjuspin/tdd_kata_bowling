import { Game } from './bowling'
describe('BowlingGame Test', () => {
  let game: Game

  beforeEach(() => {
    game = new Game()
  })

  test('should score 0 for gutter game', () => {
    rollMany(20,0)
    expect(game.score()).toEqual(0)
  })

  test('should score 20 for all ones game', () => {
    rollMany(20,1)
    expect(game.score()).toEqual(20)
  })

  test('should score 16 with a spare followed by a 3 ball', () => {
    rollSpare()
    game.roll(3)
    rollMany(17,0)
    expect(game.score()).toEqual(16)
  })

  test('should score 24 for a strike followed by  3 and 4 balls', () => {
    rollStrike()
    game.roll(3)
    game.roll(4)
    rollMany(16, 0)
    expect(game.score()).toEqual(24)
  })

  test('should return a perfect Game', () => {
    rollMany(12, 10)
    expect(game.score()).toBe(300)
  })

  function rollMany (n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  function rollSpare (): void {
    game.roll(5)
    game.roll(5)
  }

  function rollStrike (): void {
    game.roll(10)
  }
})