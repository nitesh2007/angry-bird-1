  
class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory=[]
  }

  display() {

    super.display();
console.log(this.body.position.x)
console.log(this.body.velocity.x)


   if(this.body.velocity.x>1000000000 && this.body.position.x > 1){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }




    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
