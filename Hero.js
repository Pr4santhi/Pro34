class Hero {
    constructor(x,y, width,height,options){
      var options = {
        'frictionAir':0.0005,
        'density':1.0
    }
    this.image = loadImage("images/Superhero-01.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    image(this.image);
    pop();
  }
  }