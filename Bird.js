class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = [];//an empty, we will populate the birds position is released
  }

  //draw - every frame
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.body.position.x)
    console.log(this.body.velocity.x)
        
    //creating an array named position - this has two elements - x and y
    if(this.body.position.x>200 && this.body.velocity.x > 10 ){

      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position); 
   
    }
    

    for(var i = 0 ; i < this.trajectory.length ; i++){
      image(this.smokeimage, this.trajectory[i][0],this.trajectory[i][1])


    }


    super.display();
  }
}
