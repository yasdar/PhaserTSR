import Phaser from "phaser";
import './css/style.css';

import Preload from "./scenes/preload"
//import { game_Data } from "./config";






class Boot extends Phaser.Scene {

  constructor() {
    super("Boot");
    console.log("@version 10@ - Port:3011")
  }
  
  preload() {
   
  }

  create() {
    
console.log('boot create')
this.scene.start("Preload");





  }
}


 window.addEventListener("focus",OnFocus);
window.addEventListener("blur",Onblur);
function OnFocus(){
console.log('--------------->focus')
}
function Onblur(){
  console.log('--------------->Onblur');

}
//create the game
window.addEventListener("load", function () {
  const game = new Phaser.Game({
    width: 1024,
    height: 768,
    backgroundColor: "#000000",
    scale: {
      parent: "GameDiv",
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Boot,Preload],//, Preload, Level
  });

  game.scene.start("Boot");
});

//responsive game
//listen to orientation and screen-reseize
window.addEventListener("resize", () => {
  Reseize();
});
function Reseize() {
 
}
















