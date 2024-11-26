import { DisplayMode, Engine, Color, Input, Keys } from "excalibur";
import { loader } from "./loader";
import { Paddle } from "./paddle";
import { Ball } from "./ball";

class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.Azure,
    });
  }

  initialize() {
    const paddle1 = new Paddle({
      x: 150,
      y: 500,
      colorOfBar: Color.Magenta,
    });
    const paddle2 = new Paddle({
      x: 300,
      y: 100,
      colorOfBar: Color.Chartreuse,
    });
    let ball1 = new Ball({
      x: 300,
      y: 300,
      colorOfBall: Color.Black,
    });

    this.input.pointers.primary.on("move", (e) => {
      paddle1.pos.x = e.worldPos.x;
    });

    if (this.input.keyboard.isHeld(Keys.A)) {
    }
    this.add(paddle1);
    this.add(paddle2);
    this.add(ball1);
    this.start(loader);
  }
}

export const game = new Game();
game.initialize();
