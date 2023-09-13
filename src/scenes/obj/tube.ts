import Phaser from "phaser";
import { Data } from "../../config";


export default class Tube extends Phaser.GameObjects.Sprite {

flask_ref!:Phaser.GameObjects.Image;
isOnFlask:boolean = false;
initP:any={};
MyColor!:number;
MyText!:Phaser.GameObjects.Text;

  constructor(scene:any,key:string,flask:Phaser.GameObjects.Image,_MyColor:number) {
    super(scene,0,0,key);
    this.setName(key);

    this.MyColor = _MyColor;

    this.flask_ref = flask;
    this.setInteractive({cursor:'pointer'});
    this.initP={x:0,y:0};

    


    this.scene.add.existing(this);

  }OnDown(){

    this.setDepth(3);
    //console.log("ondown",this.name)
    if(this.x>this.flask_ref.x){this.setAngle(-10)}
    else{this.setAngle(10)}

    if(this.MyText){
      this.scene.tweens.add({
        targets: this.MyText,
            scale: 1.2,
            yoyo:true,
            duration: 300
    })
    }
  }BackToPosition(interactive:boolean){
    this.scene.tweens.add({
        targets: this,
            x: this.initP.x,
            y: this.initP.y,
            angle:0,
            duration: 300,
            onComplete:()=>{
                if(interactive){this.setInteractive({cursor:'pointer'});}
                 this.setDepth(1);
                }
    })
  }dropLiquid(){
  
    let _angle =this.angle;
    this.disableInteractive();

    this.scene.tweens.add({
        targets: this,
            angle:_angle*13.5,
            duration: 200,
            onComplete:()=>{  
              console.log("dropLiquid",this.name); 
              if(Data.FlaskSteper>0){
                console.log('mix color');
                //use from a list ( strat by second color);
                Data.color = Data.colors[Data.FlaskSteper-1];
              }else{
                Data.color = this.MyColor;
              
              }
             
          }
    });

    if(this.name == 'tubes_04'){
        Data.stop = true; 
        this.scene.tweens.add({
            targets: this,
                angle:_angle,
                duration: 200,
                delay:500,
                completeDelay:200,
                onComplete:()=>{this.BackToPosition(false);}
        });
        return;}

   

    this.scene.tweens.add({
        targets: this,
            angle:_angle,
            duration: 200,
            delay:500,
            completeDelay:200,
            onStart:()=>{this.setTexture('tubeEmpty');},
            onComplete:()=>{this.BackToPosition(false); Data.FlaskSteper++;}
    });

   

  }saveint(){
    this.initP={x:this.x,y:this.y}
  }
  
}















