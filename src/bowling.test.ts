import { Game } from './bowling'
describe('BowlingGame Test', () => {
  let game: Game

  beforeEach(() => {
    game = new Game()
  })

  test('should score 0 for gutter game', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0)
  })

  test('should score 20 for all ones game', () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score).toEqual(20)
  })
})