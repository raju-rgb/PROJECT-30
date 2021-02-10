class Box{
    constructor(x, y, width, height){
        var options ={
        // isStatic: true,
         restitution: 0.4,
         friction: 0.0,
         //density:0.02
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("smile.png")
      this.visibility = 255;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      console.log(this.body.speed);
      if(this.body.speed < 7){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      fill ("deeppink")
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
    else
    {
      World.remove(world, this.body);
      push();
      tint (255, this.visibility)
      this.visibility = this.visibility -5;
      pop();
      
    }
}
}



