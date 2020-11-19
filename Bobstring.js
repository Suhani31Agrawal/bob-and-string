class Bobstring{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.07,
            length:7
        }
        this.bobstring= Constraint.create(options)
        World.add(world,this.bobstring);
    }
    display(){
        if(this.bobstring.bodyA){
            var point1=this.bobstring.bodyA.position
            var point2=this.bobstring.bodyB.position
    
            strokeWeight(4);
            line(body1,body2,offsetX,offsetY)
        }
    }
}
