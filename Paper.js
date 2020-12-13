class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':1,
        'friction':1,
        'density':95
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 2;
        this.image=loadImage("paper.png");

      World.add(world, this.body);
      }


    display(){
      var angle = this.body.angle;
      ellipseMode(RADIUS);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);

    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
      
    pop();
    }
    };



