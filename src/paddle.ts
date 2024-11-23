import { Actor, CollisionType, Color } from "excalibur";

export class Paddle extends Actor {
  constructor(deez: { x: number; y: number; colorOfBar: Color }) {
    super({
      width: 250,
      height: 10,
      color: deez.colorOfBar,
      collisionType: CollisionType.Fixed,
      x: deez.x,
      y: deez.y,
    });
  }
}
