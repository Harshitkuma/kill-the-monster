class Monster {
	constructor(x,y,width,height)
	  {
		  var options = { 
			  friction: 5, 
			  restitution:0.5,
			  isStatic: true
		  };
		  
		  this.width=width;
		  this.height=height;
		  this.image=loadImage("monster.png");
		  
		  World.add(world, this.body);
  
	  }
	  display()
	  {
			  
			  
			  push()
			  translate(this.body.position.x,this.body.position.y);
			  image(this.image, 0,0,this.width, this.height)
			  pop()
			  
	  }
  }
  