import { Actor, CollisionType, Color, vec } from "excalibur";
import { Paddle } from "./paddle";

export class Ball extends Actor {
  constructor(falgo: { x: number; y: number; colorOfBall: Color }) {
    super({
      radius: 10,
      color: falgo.colorOfBall,
      x: falgo.x,
      y: falgo.y,
      collisionType: CollisionType.Passive,
    });
  }

  moving() {
    const ballSpeed = vec(100, 100);
    setTimeout(() => {
      this.x = ballSpeed;
    }, 1000);
  }
}
