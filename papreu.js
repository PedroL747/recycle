  
class papeu{
    constructor(x,y, ){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x
        this.y=y;
		//this.r = r;
		this.width=100;
		this.height=100;
		  

		this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, /*(this.r-20)/2*/this.height, this.width, options)
	    World.add(world, this.body);

	}

	display()
	{
			
			var pos=this.body.position

			push()
			translate(pos.x, pos.y);
			//rectMode(CENTER)
			imageMode(CENTER);
			image(this.image, 0, 0,this.width ,this.height)
			//rect(0,0)
			pop()

			
	}

}
  