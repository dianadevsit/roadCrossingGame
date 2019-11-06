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
   bg.setOrigin(0,0); 
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