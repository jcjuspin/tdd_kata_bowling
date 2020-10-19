import { Game } from './bowling'
describe('BowlingGame Test', () => {
  test('should score 0 for gutter game', () => {
    const game: Game = new Game()
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0)
  })

  test('should score 20 for all ones game', () => {
    const game: Game = new Game()
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20)
  })
})