class dustbin
{
	constructor(x,y)
	{
		this.body = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight,{isStatic:true});
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	

		this.image = loadImage("dustbingreen.png");
		World.add(world,this.body);
	}
	display()
	{
		var angle = this.body.angle;
  
		push();
		translate(this.body.position.x,this.body.position.y);
		rotate(angle);
		imageMode(CENTER);
		image(this.image,0,0, this.dustbinWidth, this.dustbinHeight);
		pop();
			
	}

}