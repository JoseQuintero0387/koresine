import { Actor, CollisionType, Color, vec } from "excalibur";

export class Ball extends Actor {
  constructor() {
    super({
      radius: 10,
      color: Color.Black,
      x: 250,
      y: 250,
      collisionType: CollisionType.Passive,
    });
  }
}
