class Stone{
    constructor(x,y,width,height) {
       var options = {
           isStatic: true
       }
       this.image=loadImage("stone.png")
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       push();
     translate(pos.x, pos.y);
     imageMode(CENTER);
     image(this.image, 0, 0, 35, 35);
     pop();
     }
}