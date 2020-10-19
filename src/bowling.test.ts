import { Game } from './bowling'
describe('BowlingGame Test', () => {
  let game: Game

  beforeEach(() => {
    game = new Game()
  })

  test('should score 0 for gutter game', () => {
    rollMany(20,0)
    expect(game.score).toEqual(0)
  })

  test('should score 20 for all ones game', () => {
    rollMany(20,1)
    expect(game.score).toEqual(20)
  })

  function rollMany (n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }
})