export class Game {
  private rolls: number[] = Array(21).fill(0)
  private currentRoll: number = 0

  score (): number {
    let score = 0
    let frameIndex = 0
    for (let frame = 0; frame < 10; frame++) {
      if(this.rolls[frameIndex] == 10) {
        score += 10 + this.strikeBonus(frameIndex)
        frameIndex++
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex)
        frameIndex += 2
      } else {
        score += this.sumOfBallsinFrame(frameIndex)
        frameIndex += 2;
      }
    }
    return score
  }

  roll (pins: number): void {
    this.rolls[this.currentRoll++] = pins
  }

  isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10
  }

  private sumOfBallsinFrame(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 2]
  }

  private strikeBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
  }
}