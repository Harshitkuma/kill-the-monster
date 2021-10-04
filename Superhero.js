class Superhero {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':2,
           //modify the value of isStatic so that box objects can move
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/superhero1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      strokeWeight(4);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }
  