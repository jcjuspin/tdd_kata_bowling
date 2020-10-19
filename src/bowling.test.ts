describe('BowlingGame Test', () => {
  test('should return a score of zero when player misses every roll', () => {
    const game: Game = new Game()
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0)
  })
})