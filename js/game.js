//create a new scene
let gameScene = new Phaser.Scene('Game');


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