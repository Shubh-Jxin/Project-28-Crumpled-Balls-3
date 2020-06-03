class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.009,
            length: 5
        }
    this.pointB= pointB
    this.launcher= Constraint.create(options);
    World.add(world, this.launcher);
    }
    fly(){
        this.launcher.bodyA = null
    }
    display(){
        if(this.launcher.bodyA){
            var posA=this.launcher.bodyA.position;
            var posB= this.pointB
            strokeWeight(1)
            stroke(0)
            line(posA.x,posA.y, posB.x, posB.y)
        }
    }
}