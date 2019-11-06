//create a new scene
//init()>preload()>create()>update()
const gameScene = new Phaser.Scene('Game');


//load assets
gameScene.preload = function(){
    //loading images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');

};
//call after preload ends
gameScene.create = function() {
    //create background sprite
    //2D cordinate system and needs to be sized accordingly
   let bg = this.add.sprite(0, 0, 'background');
   //changes origin to top-left corner
//    bg.setOrigin(0,0); 

   //sprite in the center
   bg.setPosition(640/2, 360/2);

   //adjusting width and height
   let gameW = this.sys.game.config.width;
   let gameH = this.sys.game.config.height;
   /*this = refers to gameScene. sys = system companent for 
   game level properties. game = game objects. config =access to everything in config variable*/

   console.log(gameW, gameH);
   console.log(this);
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