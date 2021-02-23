class Box {
    constructor(x, y, width, height){
      
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }
        polygon = Bodies.polygon (x, y,  height, options);
        
        this.Image = loadImage()
        World.add(world, this.body);
      }
      display(){
       
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }