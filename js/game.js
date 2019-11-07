//create a new scene
//init()>preload()>create()>update()
const gameScene = new Phaser.Scene('Game');

//initiate scene parameters
gameScene.init = function() {

    //players speed
    this.playerSpeed = 1; 
}

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

  //will place player all the way to the right and halfway down the screen
  this.player = this.add.sprite(40, this.sys.game.config.height / 2 , 'player');

  /*changing all variables for enemy to this so they are with the gameScene
  and I can call upon the enemy later*/
//   this.enemy1 = this.add.sprite(250, 180, 'enemy');
  //create a second enemy
//   this.enemy2 = this.add.sprite(500, 180, 'enemy');


  /*flip image to face the hero
    this.enemy1.flipX = true;
    this.enemy2.flipX = true;
    enemy1.flipY = true; */

  //changes origin to top-left corner
  //    bg.setOrigin(0,0); 
  //sprite in the center
  //dividing the number by two from the width and height
  bg.setPosition(640 / 2, 360 / 2);
  //    player.setPosition(50, 180, 'player');
  
  this.player.setScale(0.5);

    /* this.enemy1.scaleX = 2;
       this.enemy1.scaleY = 2;
       this.enemy2.scaleX = 2;
       this.enemy2.scaleY = 2;
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