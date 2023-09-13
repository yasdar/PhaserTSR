import Phaser, { Tweens } from "phaser";
import { Data } from "../config";
import Tube from "./obj/tube";
import $ from "jquery";
export default class Preload extends Phaser.Scene {

  BG!:Phaser.GameObjects.Image;
  Backflask!:Phaser.GameObjects.Image;
  flask!:Phaser.GameObjects.Image;
  //6 tubes
  tube1!:Tube;
  tube2!:Tube;
  tube3!:Tube;
  tube4!:Tube;
  tube5!:Tube;
  tube6!:Tube;

  text1!:Phaser.GameObjects.Text;
  text2!:Phaser.GameObjects.Text;
  text3!:Phaser.GameObjects.Text;
  text4!:Phaser.GameObjects.Text;
  text5!:Phaser.GameObjects.Text;
  text6!:Phaser.GameObjects.Text;
  GapYtubeText:number =0.7;
  text7!:Phaser.GameObjects.Text;


 incorrect!:Phaser.GameObjects.Image;

 style1:any={
  fontFamily: 'Arial',
  fontSize: '24px',
  color: '#4f4a4a',
  align:"center",
  resolution: 1
};


  constructor() {
    super("Preload");

  }
  
  preload() {


   this.load.image('flask','./assets/images/flask.png');

   this.load.image('tubes_01','./assets/images/tubes_01.png');
   this.load.image('tubes_02','./assets/images/tubes_02.png');
   this.load.image('tubes_03','./assets/images/tubes_03.png');
   this.load.image('tubes_04','./assets/images/tubes_04.png');
   this.load.image('tubes_05','./assets/images/tubes_05.png');
   this.load.image('tubes_06','./assets/images/tubes_06.png');

   this.load.image('tubeEmpty','./assets/images/tubeEmpty.png');
   
   this.load.image('b1','./assets/images/b01.png');
   this.load.image('b2','./assets/images/b02.png');
   this.load.image('b3','./assets/images/b03.png');
   this.load.image('b4','./assets/images/b04.png');
   this.load.image('b5','./assets/images/b5.png');

   this.load.image('incorrect','./assets/images/incorrect.png');
   
   this.load.image('confettis','./assets/images/confettis.png');

   this.load.image('p1','./assets/images/p1.png');
   this.load.image('p2','./assets/images/p2.png');
   this.load.image('p3','./assets/images/p3.png');

   this.load.image('flask2','./assets/images/flask2.png');
   this.load.image('droplet','./assets/images/droplet.png');
   this.load.image('whitestar','./assets/images/whitestar.png');
   
   
   

  }

  create() {
  
   $('.leftDiv').show();
    $('.pagefooter').show();

    Data.FlaskSteper = 0;
    Data.stop = false;

if( ! this.sys.game.device.os.desktop){this.style1.resolution = 2;}

console.log('preload create')
this.BG = this.add.image(0,0,'BG');

this.Backflask = this.add.image(0,0,'b1');
this.Backflask.setAlpha(0);
this.flask = this.add.image(0,0,'flask');
//left tubes
this.tube1 = new Tube(this,'tubes_01',this.flask,0xD7B987);
this.text1 = this.add.text(0,0,"Conditioning\nAgent\nSTEPANQUAT®\nSoleil",this.style1);
this.tube2 = new Tube(this,'tubes_02',this.flask,0xE67181);
this.text2 = this.add.text(0,0,"Conditioning\nOil",this.style1);
this.tube3 = new Tube(this,'tubes_03',this.flask,0xF4A97B);
this.text3 = this.add.text(0,0,"Emollient",this.style1);
//right tubes
this.tube4 = new Tube(this,'tubes_04',this.flask,0xCAD9F1);
this.text4 = this.add.text(0,0,"Water",this.style1);
this.tube5 = new Tube(this,'tubes_05',this.flask,0x7993D3);
this.text5 = this.add.text(0,0,"Fragrance",this.style1);
this.tube6 = new Tube(this,'tubes_06',this.flask,0xCEDA58);
this.text6 = this.add.text(0,0,"Antioxidant",this.style1);
//set text origin
this.text1.setOrigin(0.5,0.5);
this.text2.setOrigin(0.5,0.5);
this.text3.setOrigin(0.5,0.5);
this.text4.setOrigin(0.5,0.5);
this.text5.setOrigin(0.5,0.5);
this.text6.setOrigin(0.5,0.5);


this.input.setDraggable([this.tube1,this.tube2,this.tube3,
  this.tube4,this.tube5,this.tube6]);


    this.input.on('dragstart',(pointer:any, gameObject:any, dragX:number, dragY:number)=>{
      if(Data.stop){return;}
        gameObject.OnDown();
      },this)
    
     this.input.on('drag',  (pointer:any, gameObject:any, dragX:number, dragY:number)=>{
      if(Data.stop){return;}
      //console.log('drag',dragX,dragY)
      gameObject.setPosition(dragX,dragY);
      //check if tube on flask
      let DX:number = Math.abs(gameObject.x - this.flask.x-this.flask.displayWidth*0.1);
      let DY:number = Math.abs(gameObject.y - this.flask.y);
   
      if(DX<this.flask.displayWidth*0.4 && DY < this.flask.displayHeight*0.6){
       //on the flask
       gameObject.isOnFlask = true;

      }else{
       //away from the flask
       gameObject.isOnFlask = false;
      }
     },this);
    
     this.input.on('dragend',  (pointer:any, gameObject:any, dragX:number, dragY:number)=>{
      if(Data.stop){return;}
        if(!gameObject.isOnFlask){gameObject.BackToPosition(true);}
        else{gameObject.dropLiquid();}

    },this);



this.incorrect = this.add.image(0,0,'incorrect');
this.incorrect.setOrigin(0,1)
this.incorrect.setVisible(false);
this.incorrect.setDepth(4);
this.incorrect.setInteractive();
this.incorrect.on('pointerdown',()=>{
  Data.stop = false;
  this.incorrect.setVisible(false);
})

Data.Me = this;
this.Arrange(this.cameras.main.height>this.cameras.main.width);

  }
  Arrange(portrait:boolean){
   
   if(portrait){
    this.TextVisibility(true);
    $('#textZoneid').hide();

    this.GapYtubeText = 0.6;
    Data.ScaleFactor = window.innerHeight/1583;
    this.style1.fontSize=Math.round(32*Data.ScaleFactor)+'px';

    console.log('-->portrait',this.style1.fontSize)
   
    console.log('Data.ScaleFactor',Data.ScaleFactor)

    let coef = this.BG.width/(this.BG.height+44);
    this.BG.setDisplaySize(this.cameras.main.height*coef,this.cameras.main.height+44);
    this.BG.setPosition(this.cameras.main.width*0.5,this.cameras.main.height*0.5);


    this.flask.setScale(Data.ScaleFactor*0.8);
    this.flask.setPosition(this.cameras.main.width*0.50,this.cameras.main.height*0.6)

    this.Backflask.setScale(Data.ScaleFactor*0.8);
    this.Backflask.setPosition(this.cameras.main.width*0.50,this.cameras.main.height*0.6)

    let tubeSC = Data.ScaleFactor*0.9;
    //left tubes
    this.tube1.setScale(tubeSC);
    this.tube1.setPosition(this.flask.x - 2.2*this.cameras.main.width/6,
    this.flask.y-this.flask.displayHeight*0.9);

    this.tube2.setScale(tubeSC);
    this.tube2.setPosition(this.flask.x - 2.2*this.cameras.main.width/6,
    this.flask.y-this.flask.displayHeight*0.3);

    this.tube3.setScale(tubeSC);
    this.tube3.setPosition(this.flask.x - 2.2*this.cameras.main.width/6,
    this.flask.y+this.flask.displayHeight*0.3);

    //right tubes
    this.tube4.setScale(tubeSC);
    this.tube4.setPosition(this.flask.x + 2.2*this.cameras.main.width/6,this.flask.y-this.flask.displayHeight*0.9);

    this.tube5.setScale(tubeSC);
    this.tube5.setPosition(this.flask.x + 2.2*this.cameras.main.width/6,this.flask.y-this.flask.displayHeight*0.3);

    this.tube6.setScale(tubeSC);
    this.tube6.setPosition(this.flask.x + 2.2*this.cameras.main.width/6,this.flask.y+this.flask.displayHeight*0.3);

   }else{
    this.TextVisibility(false);
    $('#textZoneid').show();

    this.GapYtubeText = 0.7;
    Data.ScaleFactor = window.innerWidth/2700;
    this.style1.fontSize = Math.round(32*Data.ScaleFactor)+'px';
    
    console.log('-->landscape',this.style1.fontSize);
   
    console.log('Data.ScaleFactor',Data.ScaleFactor)

    this.BG.setDisplaySize(this.cameras.main.width,this.cameras.main.height+44);
    this.BG.setPosition(this.cameras.main.width*0.5,this.cameras.main.height*0.5);


    this.flask.setScale(Data.ScaleFactor*0.9);
    this.flask.setPosition(this.cameras.main.width*0.515,this.cameras.main.height*0.54);
    
    this.Backflask.setScale(Data.ScaleFactor*0.9);
    this.Backflask.setPosition(this.cameras.main.width*0.515,this.cameras.main.height*0.54);
   
    //correctio to ipad
    if(Data.ScaleFactor<0.5){ this.flask.setScale(Data.ScaleFactor);this.Backflask.setScale(Data.ScaleFactor);}
    this.tube1.setScale(Data.ScaleFactor);
    this.flask.setPosition(this.cameras.main.width*0.515,this.cameras.main.height*0.59);
    this.Backflask.setPosition(this.cameras.main.width*0.515,this.cameras.main.height*0.59);

    let tubeY = this.flask.y+this.flask.displayHeight*0.09;
    let tubeSC = Data.ScaleFactor*0.9;
    //left tubes
    this.tube1.setScale(tubeSC);
    this.tube1.setPosition(this.flask.x - 2.2*this.cameras.main.width/6,tubeY);

    this.tube2.setScale(tubeSC);
    this.tube2.setPosition(this.flask.x - 1.5*this.cameras.main.width/6,tubeY);

    this.tube3.setScale(tubeSC);
    this.tube3.setPosition(this.flask.x - 0.9*this.cameras.main.width/6,tubeY);

    //right tubes
    this.tube4.setScale(tubeSC);
    this.tube4.setPosition(this.flask.x + 0.9*this.cameras.main.width/6,tubeY);

    this.tube5.setScale(tubeSC);
    this.tube5.setPosition(this.flask.x + 1.5*this.cameras.main.width/6,tubeY);

    this.tube6.setScale(tubeSC);
    this.tube6.setPosition(this.flask.x + 2.2*this.cameras.main.width/6,tubeY);

   }


this.tube1.saveint();
this.tube2.saveint();
this.tube3.saveint();
this.tube4.saveint();
this.tube5.saveint();
this.tube6.saveint();


this.setUnder(this.text1,this.tube1)
this.setUnder(this.text2,this.tube2)
this.setUnder(this.text3,this.tube3)
this.setUnder(this.text4,this.tube4)
this.setUnder(this.text5,this.tube5)
this.setUnder(this.text6,this.tube6)

this.incorrect.setScale(Data.ScaleFactor);
this.incorrect.setPosition(this.flask.x,this.flask.y);



  }
  setUnder(txt:Phaser.GameObjects.Text,tube:Tube){
    
txt.setStyle(this.style1)
    txt.setPosition(
      tube.x,
      tube.y+tube.displayHeight*this.GapYtubeText+txt.displayHeight*0.5
      );

      //attach text to tube
      tube.MyText = txt;
  }
  update() {
    if(Data.stop){ 
      this.incorrect.setVisible(true);  
      this.incorrect.setAlpha(1);
      this.tweens.add({
        targets:this.incorrect,
            alpha:0,
            duration:1000,
            delay:500,
            onComplete:()=>{
              Data.stop = false;
            }
      });

      return;
      
    }


    if(Data.Me && Data.FlaskSteper>0 && Data.FlaskSteper<6){
     
      if(Data.FlaskSteper<5 && this.Backflask.texture.key != "b"+Data.FlaskSteper || this.Backflask.alpha == 0){

       
        this.Backflask.setTexture("b"+Data.FlaskSteper);
        this.Backflask.setAlpha(1);
        // set tint
        console.log(Data.FlaskSteper,'use color',Data.color)
        this.Backflask.setTint(Data.color);

      }else if(Data.FlaskSteper==5){
        console.log("apply textute")
        Data.FlaskSteper = 6;
        this.Backflask.setTint(0xffffff);
        this.Backflask.setTexture('b5');
        this.PlayConfetti();

      }


    }
  }
  PlayConfetti(){
    let confettis = this.add.image(0,0,'confettis');
    confettis.setScale(this.flask.scale*0.5);
    confettis.setAlpha(0);
    confettis.setPosition(this.flask.x,this.flask.y-this.flask.displayHeight*0.25);

    this.tweens.add({
      targets:confettis,
          scale:this.flask.scale*1.1,
          alpha:1,
          duration:200,
          delay:50,
          onComplete:()=>{
            this.playParticules();

            let titleV:any = document.getElementById("titleV");
            titleV.innerHTML = "Congratulations! You’ve done it!";

            let contentV:any = document.getElementById("contentV");
            contentV.innerHTML = "Click to fill in your details and a sample of the hair oil is on its way to you!";
           
            let footerV:any = document.getElementById("footerid");
            footerV.innerHTML = "";
           
            let btvV:any = document.getElementById("btvV");
            btvV.style.visibility = "visible";

            setTimeout(() => {
              this.scene.start("LastScreen");
            }, 2000);
          }
  });
  



  }
  playParticules(){

    const emitter1 = this.add.particles(this.flask.x, this.flask.y-this.flask.displayHeight*0.5, 'p1', {
      lifespan: 8000,
      alpha:{ start: 0, end: 0.5 },
      speed: { min: 150, max: 250 },
      scale: { start: 0.3, end: 0.3 },
      rotate:{start: 0, end: 180},
      gravityY: 150,
      emitting: false
    });
  
    const emitter2 = this.add.particles(this.flask.x, this.flask.y-this.flask.displayHeight*0.5, 'p2', {
      lifespan: 8000,
      speed: { min: 200, max: 350 },
      scale: { start: 0.6, end: 1 },
      rotate:{start: 0, end: 180},
      gravityY: 150,
      emitting: false
    });
  
  
    const emitter3 = this.add.particles(this.flask.x, this.flask.y-this.flask.displayHeight*0.5, 'p3', {
      lifespan: 8000,
      speed: { min: 300, max: 350 },
      scale: { start: 0.3, end: 0.3 },
      rotate:{start: 0, end: 180},
      gravityY: 150,
      emitting: false
    });
  
  emitter1.explode(16);
  emitter2.explode(16);
  emitter3.explode(32);
  }
  TextVisibility(V:boolean){
    this.text1.setVisible(V);
    this.text2.setVisible(V);
    this.text3.setVisible(V);
    this.text4.setVisible(V);
    this.text5.setVisible(V);
    this.text6.setVisible(V);

  }

 
}















