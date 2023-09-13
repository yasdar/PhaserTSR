import Phaser from "phaser";
import './css/style.css';

import Preload from "./scenes/preload"
import { Data } from "./config";
import LastScreen from "./scenes/lastscreen";
import $ from "jquery";






class Boot extends Phaser.Scene {

  constructor() {
    super("Boot");
    console.log("@version 10@ - Port:3011")
  }
  
  preload() {

  

    this.load.image('BG','./assets/images/BG.png');
    this.load.image('darkG','./assets/images/darkG.png');

    this.load.image('flask2','./assets/images/flask2.png');
   this.load.image('droplet','./assets/images/droplet.png');
   this.load.image('whitestar','./assets/images/whitestar.png');
   
  }

  create() {
    
console.log('boot create')
this.scene.start("Preload");

  }
}



//create the game
window.addEventListener("load", function () {
  const game = new Phaser.Game({
    width: window.innerWidth,
    height:window.innerHeight,
    //backgroundColor: "#C1E3E5",
    transparent:true,
    scale: {
      parent: "GameDiv",
      mode: Phaser.Scale.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Boot,Preload,LastScreen],//, Preload, Level
  });

  game.scene.start("Boot");



  let btvV:any = document.getElementById("btvV");
  btvV.onclick = function() {
    window.open('https://go.stepan.com/sample-give-away-1462',"_self");
    }

});

//responsive game
//listen to orientation and screen-reseize
window.addEventListener("resize", () => {
  Reseize();
});
function Reseize() {
 if(Data.Me){
  setTimeout(() => {
    Data.Me.Arrange(window.innerHeight>window.innerWidth);
  }, 100);
 
 }
}
















