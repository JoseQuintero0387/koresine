import { DisplayMode, Engine, Color, Input, Keys } from "excalibur";
import { loader } from "./loader";

class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FitScreen,
      backgroundColor: Color.DarkGray,
    });
  }

  initialize() {
    
    this.start(loader);
  }
}

export const game = new Game();
game.initialize();
