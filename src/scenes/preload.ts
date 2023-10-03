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
  mobileAndTabletcheck() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor);
    return check;
  }
  create() {
  
    

   $('.leftDiv').show();

   


    Data.FlaskSteper = 0;
    Data.stop = false;

if( ! this.sys.game.device.os.desktop){this.style1.resolution = 2;}

console.log('preload create')
this.BG = this.add.image(0,0,'BG');
this.BG.setVisible(false);

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


    if(this.mobileAndTabletcheck() && window.innerHeight>window.innerWidth){
      //mobile portrait
      $('.textZone').removeClass('onDesktop');
      $('.textZone').addClass('onMobile');

      $(".p3").css({left: '59.5%'});
      $(".p6").css({left: '59.5%'});

     // $(".logo").css({right: '2%'});

  } if(this.mobileAndTabletcheck() && window.innerHeight < window.innerWidth){
    //mobile landscape
   
    //$(".logo").css({right: '31%'});

}else if(window.innerHeight>window.innerWidth){
    //desktop
    $('.textZone').removeClass('onMobile');
    $('.textZone').addClass('onDesktop');

    $(".p3").css({left: '62.5%'});
    $(".p6").css({left: '62.5%'});
  }else if(window.innerHeight<window.innerWidth){
    $('.textZone').removeClass('onMobile');
    $('.textZone').removeClass('onDesktop');

    $(".p3").css({left: '31.5%'});
    $(".p6").css({left: '84.5%'});
  }
   
   if(portrait){
    this.TextVisibility(true);
    //$('#textZoneid').hide();

    this.GapYtubeText = 0.6;
    Data.ScaleFactor = window.innerHeight/1583;
    this.style1.fontSize=Math.round(28*Data.ScaleFactor)+'px';

    console.log('-->portrait',this.style1.fontSize)
   
    console.log('Data.ScaleFactor',Data.ScaleFactor)

    let coef = this.BG.width/(this.BG.height+44);
    this.BG.setDisplaySize(this.cameras.main.height*coef,this.cameras.main.height+44);
    this.BG.setPosition(this.cameras.main.width*0.5,(this.cameras.main.height*0.5)+44);


    this.flask.setScale(Data.ScaleFactor*0.38);
    this.flask.setPosition(this.cameras.main.width*0.50,this.cameras.main.height*0.45)

    this.Backflask.setScale(Data.ScaleFactor*0.38);
    this.Backflask.setPosition(this.cameras.main.width*0.50,this.cameras.main.height*0.45)

    let tubeSC = Data.ScaleFactor*0.4;
    //left tubes
    this.tube1.setScale(tubeSC);
    this.tube1.setPosition(this.cameras.main.width*0.25,this.cameras.main.height*0.63);

    this.tube2.setScale(tubeSC);
    this.tube2.setPosition(this.cameras.main.width*0.5,this.cameras.main.height*0.63);

    this.tube3.setScale(tubeSC);
    this.tube3.setPosition(this.cameras.main.width*0.75,this.cameras.main.height*0.63);

    //right tubes
    this.tube4.setScale(tubeSC);
    this.tube4.setPosition(this.cameras.main.width*0.25,this.cameras.main.height*0.85);

    this.tube5.setScale(tubeSC);
    this.tube5.setPosition(this.cameras.main.width*0.5,this.cameras.main.height*0.85);

    this.tube6.setScale(tubeSC);
    this.tube6.setPosition(this.cameras.main.width*0.75,this.cameras.main.height*0.85);

    this.incorrect.setScale(Data.ScaleFactor*0.75);
    this.incorrect.setPosition(this.flask.x+this.flask.displayWidth*0.2,this.flask.y+this.flask.displayHeight*0);
    this.TextVisibility(false);
  }else{
    this.TextVisibility(false);
   // $('#textZoneid').show();

    this.GapYtubeText = 0.7;
    Data.ScaleFactor = window.innerWidth/2700;
    this.style1.fontSize = Math.round(32*Data.ScaleFactor)+'px';
    
    this.incorrect.setScale(Data.ScaleFactor);
    this.incorrect.setPosition(this.flask.x,this.flask.y);

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















