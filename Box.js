class Box extends BaseClass {

  constructor(x,y,width,height){
    //invoke parent class constructor
    super(x,y,width,height);
    this.image = loadImage('sprites/wood1.png');
  }
 
};
