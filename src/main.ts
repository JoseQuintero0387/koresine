import { Engine, DisplayMode } from "excalibur";
import { Player } from "./player";
import { loader } from "./resources";

class Game extends Engine {
  constructor() {
    super({
      width: 1920,
      height: 1080,
      displayMode: DisplayMode.FitScreen,
    });
  }

  initialize() {
    const player = new Player();
    this.add(player);

    this.start(loader);
  }
}

export const game = new Game();
game.initialize();
