import 'phaser';
 
class PlayGame extends Phaser.Scene {
    image: Phaser.GameObjects.Image;
    constructor() {
        super("PlayGame");
    }
    preload(): void {
       
    }
    create(): void {
        console.log('hello TS');
        
    }
    update(): void {
       
    }
}
 
let configObject: Phaser.Types.Core.GameConfig = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'thegame',
        width: 800,
        height: 600
    },
    scene: PlayGame
};
 
new Phaser.Game(configObject);