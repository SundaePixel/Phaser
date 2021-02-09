window.onload = function(){


  const DEBUG = false;
  const GAME_WIDTH = 400;
  const GAME_HEIGHT = 200;

  var config = {
    type: Phaser.AUTO,
    scale: {
      parent: "game",
      mode: Phaser.Scale.FIT,
    },
    pixelArt: false,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    physics: {
      default: "arcade",
      arcade: {
        debug: DEBUG,
      },
    },
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };


  var game = new Phaser.Game(config);

}
