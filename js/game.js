//create a new scene
//init()>preload()>create()>update()
let gameScene = new Phaser.Scene('Game');
// initiate scene parameters
gameScene.init = function() {
  // player speed
  this.playerSpeed = 3;
  // enemy speed
  this.enemyMinSpeed = 2;
  this.enemyMaxSpeed = 4.5;
  // boundaries
  this.enemyMinY = 80;
  this.enemyMaxY = 280;
};
//load assets
gameScene.preload = function() {
  //loading images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/dragon.png');
  this.load.image('goal', 'assets/treasure.png');
  //   this.load.image('enemy2', 'assets/dragon.png');
};
//call after preload ends
gameScene.create = function() {
  //sprite will go in order based on inheritance
  //create background sprite
  //2D cordinate system and needs to be sized accordingly
  //multiple sprite can use depth instead of inheritance
  let bg = this.add.sprite(0, 0, 'background');
  //will place player all the way to the right and halfway down the screen
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
  // we are reducing the width and height by 50%
  this.player.setScale(0.5);
  //will place treasure middle of left side 
  this.goal = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'goal');
  this.goal.setScale(0.6);
  /*changing all variables for enemy to this so they are with the gameScene
  and I can call upon the enemy later*/
  this.enemy = this.add.sprite(120, this.sys.game.config.height / 2, 'enemy');
  //flip image to face the hero
  this.enemy.flipX = true;
  this.enemy.setScale(0.6);
  //create a second enemy
  //   this.enemy2 = this.add.sprite(500, 180, 'enemy');
  // set enemy speed
  let dir = Math.random() < 0.5 ? 1 : -1;
  let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
  this.enemy.speed = dir * speed;
  //less than 0.5 will get 1 and if it is more we will get -1
  //changes origin to top-left corner
  //    bg.setOrigin(0,0); 
  //sprite in the center
  //   dividing the number by two from the width and height
  bg.setPosition(640 / 2, 360 / 2);
  //    player.setPosition(50, 180, 'player');
  /* this.enemy1.scaleX = 2;
     this.enemy1.scaleY = 2;
     adjusting width and height
     let gameW = this.sys.game.config.width;
     let gameH = this.sys.game.config.height;
     this = refers to gameScene. sys = system companent for 
     game level properties. game = game objects. config =access to everything in config variable
     console.log(gameW, gameH);
     console.log(this);
     will log the gamescene and everything to do with it for more detail */
};
gameScene.update = function() {
  /* enemy will slowly drop from screen
  this.enemy1.y += 0.1;
  enemy will slowly spin in a circle 
  this.enemy1.angle += 1;
  check if we have reached scale of 2 and the growth will stop
  if (this.player.scaleX < 2){
  played around with growth for the player
  this.player.scaleX += 0.01;
  this.player.scaleY += 0.01;
  */
  //check for active user input
  if (this.input.activePointer.isDown) {
    // player walks
    this.player.x += this.playerSpeed;
  }
  //treasure overlap check
  let playerRect = this.player.getBounds();
  let treasureRect = this.goal.getBounds();
  //if this is true then both rectangles are over lapping
  if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)) {
    // console.log('resached goal!');
    //restart the scene when player reaches treasure instead
    this.scene.restart();
    return;
  }
  // enemy movement
  this.enemy.y += this.enemy.speed;
  // check we haven't passed min Y
  let conditionUp = this.enemy.speed < 0 && this.enemy.y <= this.enemyMinY;
  let conditionDown = this.enemy.speed > 0 && this.enemy.y >= this.enemyMaxY;
  // if we passed the upper or lower limit, reverse
  if (conditionUp || conditionDown) {
    this.enemy.speed *= -1;
  }
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