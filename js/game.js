//create a new scene
//init()>preload()>create()>update()
const gameScene = new Phaser.Scene('Game');
//load assets
gameScene.preload = function() {
  //loading images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/dragon.png')
//   this.load.image('enemy2', 'assets/dragon.png');
};
//call after preload ends
gameScene.create = function() {
  //sprite will go in order based on inheritance
  //create background sprite
  //2D cordinate system and needs to be sized accordingly
  //multiple sprite can use depth instead of inheritance
  let bg = this.add.sprite(0, 0, 'background');
  let player = this.add.sprite(50, 180, 'player');
  let enemy1 = this.add.sprite(250, 180, 'enemy');
  //create a second enemy
  let enemy2 = this.add.sprite(500, 180, 'enemy');


  //flip image to face the hero
    enemy1.flipX = true;
    enemy2.flipX = true;
    // enemy1.flipY = true;

  //changes origin to top-left corner
  //    bg.setOrigin(0,0); 
  //sprite in the center
  //dividing the number by two from the width and height
  bg.setPosition(640 / 2, 360 / 2);
  //    player.setPosition(50, 180, 'player');
  
  player.setScale(0.5, 2);
  enemy1.scaleX = 2;
  enemy1.scaleY = 2;
  enemy2.scaleX = 2;
  enemy2.scaleY = 2;
  //adjusting width and height
  //    let gameW = this.sys.game.config.width;
  //    let gameH = this.sys.game.config.height;
  /*this = refers to gameScene. sys = system companent for 
  game level properties. game = game objects. config =access to everything in config variable*/
  //    console.log(gameW, gameH);
  //    console.log(this);
  //will log the gamescene and everything to do with it for more detail
};
//set the config of the game
let config = {
  //type is how will phaser render game in the browser
  type: Phaser.AUTO,
  //phaser will decide to use webgl or canvas
  width: 640,
  height: 360,
  scene: gameScene
};
//create a new game and pass config
let game = new Phaser.Game(config);