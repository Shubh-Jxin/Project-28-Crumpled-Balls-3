class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body= Bodies.circle(100,648,20,options)
        this.radius= 20;
        this.image= loadImage("paper.png");
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        fill("white");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+5,50,50);
    }
}