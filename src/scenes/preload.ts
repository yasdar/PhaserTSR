import Phaser from "phaser";

export default class Preload extends Phaser.Scene {

  constructor() {
    super("Preload");

  }
  
  preload() {
   this.load.image('im1','./assets/images/im1.png')
  
  }

  create() {
    
console.log('preload create')

this.add.image(200,200,'im1')




  }
}















