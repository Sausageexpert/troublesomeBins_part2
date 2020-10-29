class Bin{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic':true
      }
      this.bottomBody = Bodies.rectangle(x, y, width, height, options);
      this.width = 200;
      this.height = 200;
      this.image = loadImage("bin.png");
      World.add(world, this.bottomBody);
    }
    display(){
      var angle = this.bottomBody.angle;
      push();
      translate(this.bottomBody.position.x, this.bottomBody.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}