import Phaser, { Tweens } from "phaser";
import { Data } from "../config";
import $ from "jquery";

export default class LastScreen extends Phaser.Scene {

  BG!:Phaser.GameObjects.Image;
  darkG!:Phaser.GameObjects.Image;

  flask2!:Phaser.GameObjects.Image;
  droplet!:Phaser.GameObjects.Image;
  whitestar!:Phaser.GameObjects.Image;
  constructor() {
    super("LastScreen");

  }
  create() {
   
    console.log('hide text now')

  
    $('#textZoneid').hide();

this.BG = this.add.image(0,0,'BG');
this.darkG = this.add.image(0,0,'darkG');



this.flask2 = this.add.image(0,0,'flask2');
this.droplet = this.add.image(0,0,'droplet');
this.whitestar = this.add.image(0,0,'whitestar');


Data.Me = this;
this.Arrange(this.cameras.main.height>this.cameras.main.width);

  }
  Arrange(portrait:boolean){
   
   if(portrait){
   
    Data.ScaleFactor = window.innerHeight/1583;
  
   
    console.log('Data.ScaleFactor',Data.ScaleFactor)

    let coef = this.BG.width/(this.BG.height+44);
    this.BG.setDisplaySize(this.cameras.main.height*coef,this.cameras.main.height+44);
    this.BG.setPosition(this.cameras.main.width*0.5,this.cameras.main.height*0.5);

    this.darkG.setScale(Data.ScaleFactor*0.70);
    this.darkG.setPosition(this.cameras.main.width*0.5,this.cameras.main.height - this.darkG.displayHeight*0.5);


    this.flask2.setScale(Data.ScaleFactor*0.50);
    this.flask2.setPosition(this.darkG.x+this.darkG.displayWidth*0.15,this.cameras.main.height*0.5);

    this.droplet.setScale(Data.ScaleFactor*0.70);
    this.droplet.setPosition(this.flask2.x-this.flask2.displayWidth*0.5,
        this.flask2.y+this.flask2.displayHeight);

    this.whitestar.setScale(Data.ScaleFactor*0.70);
    this.whitestar.setPosition(this.droplet.x,this.droplet.y);



   }else{

    Data.ScaleFactor = window.innerWidth/2700;
    this.BG.setDisplaySize(this.cameras.main.width,this.cameras.main.height+44);
    this.BG.setPosition(this.cameras.main.width*0.5,this.cameras.main.height*0.5);

    let SC = (this.cameras.main.height/this.darkG.height);
    this.darkG.setScale(SC);
    this.darkG.setPosition(this.cameras.main.width*0.5,this.cameras.main.height - this.darkG.displayHeight*0.5);
 
    this.flask2.setScale(Data.ScaleFactor*0.7);
    this.flask2.setPosition(this.darkG.x+this.darkG.displayWidth*0.15,this.cameras.main.height*0.25);

    this.droplet.setScale(Data.ScaleFactor*0.70);
    this.droplet.setPosition(this.flask2.x-this.flask2.displayWidth*0.5,
        this.flask2.y+this.flask2.displayHeight);

    this.whitestar.setScale(Data.ScaleFactor*0.70);
    this.whitestar.setPosition(this.droplet.x,this.droplet.y);

   }




this.Anime();
this.time.addEvent({ delay: 10000, callback: this.Anime, callbackScope: this, loop: true });
  }
 
  Anime() {
    this.droplet.setScale(Data.ScaleFactor*0.70);
    this.droplet.setPosition(this.flask2.x-this.flask2.displayWidth*0.5,
        this.flask2.y+this.flask2.displayHeight);

    this.flask2.setAlpha(0);
    this.droplet.setAlpha(0);
    this.whitestar.setAlpha(0);
//show and rotate flask2
this.flask2.setAngle(60);
let sc = this.droplet.scaleX;
this.droplet.setScale(sc*0.5);

this.tweens.add({
    targets: this.flask2,
        alpha: 1,
        duration: 300
    })
    this.tweens.add({
        targets: this.flask2,
            angle: 0,
            duration: 600,
            delay:300
        })
//show and hide white stars
this.tweens.add({ 
targets: this.whitestar,
alpha: 1,
delay:1000,
duration:500
})
//show droplet and go down

this.tweens.add({
    targets: this.droplet,
        alpha: 1,
        delay:1500,
        duration: 300
    })

    this.tweens.add({
        targets: this.droplet,
            scale: sc,
            delay:1800,
            duration: 300
        })
        this.tweens.add({
            targets: this.droplet,
                scale: sc,
                delay:2000,
                y: this.cameras.main.height*0.8,
                alpha:0,
                duration:3000
            })
  }
 

 
}















