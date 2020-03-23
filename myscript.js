/*

DONUT ANIMATION

*/
    var canvas_x = 200;
    var canvas_y = 150;
const donut = ( d ) => {
   d.setup = () => {
    var cvn = d.createCanvas(canvas_x, canvas_y);
    cvn.parent("donut_canvas");
    donutImage = d.createImg('photos/donutclick-02.png');
    donutSprite = d.createSprite();

    donutSprite.draw = function() {
      d.image(donutImage, this.deltaX*2, this.deltaY*2, 100, 100);
    };

    donutSprite.maxSpeed = 10;

    var endImage = document.getElementsByTagName("IMG")[5];
    endImage.parentNode.removeChild(endImage);

  };

   d.draw = () => {
    d.background(255, 255, 255);

    //mouse trailer, the speed is inversely proportional to the mouse distance
    donutSprite.velocity.x = (d.mouseX-donutSprite.position.x)/10;
    donutSprite.velocity.y = (d.mouseY-donutSprite.position.y)/10;
    if(donutSprite.position.x < 50)
      donutSprite.position.x = 50;
    if(donutSprite.position.y < 50)
      donutSprite.position.y = 50;
    if(donutSprite.position.x > canvas_x-50)
      donutSprite.position.x = canvas_x-50;
    if(donutSprite.position.y > canvas_y-50)
      donutSprite.position.y = canvas_y-50;

    d.drawSprites();
  };
};

let donutp5 = new p5(donut);

/*

CUPCAKE ANIMATION

*/


const cupcake = ( cc ) => {
   cc.setup = () => {
    var cvn = cc.createCanvas(canvas_x, canvas_y);
    cvn.parent("cupcake_canvas");
    cupcakeImage = cc.createImg('photos/cupcakeclick-01.png');
    cupcakeSprite = cc.createSprite();

    cupcakeSprite.draw = function() {
      cc.image(cupcakeImage, this.deltaX*2, this.deltaY*2, 100, 100);
    };

    cupcakeSprite.maxSpeed = 10;

    var endImage = document.getElementsByTagName("IMG")[5];
    endImage.parentNode.removeChild(endImage);

  };

   cc.draw = () => {
    cc.background(255, 255, 255);

    //mouse trailer, the speed is inversely proportional to the mouse distance
    cupcakeSprite.velocity.x = (cc.mouseX-cupcakeSprite.position.x)/10;
    cupcakeSprite.velocity.y = (cc.mouseY-cupcakeSprite.position.y)/10;
    if(cupcakeSprite.position.x < 50)
      cupcakeSprite.position.x = 50;
    if(cupcakeSprite.position.y < 50)
      cupcakeSprite.position.y = 50;
    if(cupcakeSprite.position.x > canvas_x-50)
      cupcakeSprite.position.x = canvas_x-50;
    if(cupcakeSprite.position.y > canvas_y-50)
      cupcakeSprite.position.y = canvas_y-50;

    cc.drawSprites();
  };
};

let cupcakep5 = new p5(cupcake);

/*

CAKE ANIMATION

*/

const cake = ( c ) => {
   c.setup = () => {
    var cvn = c.createCanvas(canvas_x, canvas_y);
    cvn.parent("cake_canvas");
    cakeImage = c.createImg('photos/cakeclick-03.png');
    cakeSprite = c.createSprite();

    cakeSprite.draw = function() {
      c.image(cakeImage, this.deltaX*2, this.deltaY*2, 100, 100);
    };

    cakeSprite.maxSpeed = 10;

    var endImage = document.getElementsByTagName("IMG")[5];
    endImage.parentNode.removeChild(endImage);

  };

   c.draw = () => {
    c.background(255, 255, 255);

    //mouse trailer, the speed is inversely proportional to the mouse distance
    cakeSprite.velocity.x = (c.mouseX-cakeSprite.position.x)/10;
    cakeSprite.velocity.y = (c.mouseY-cakeSprite.position.y)/10;
    if(cakeSprite.position.x < 50)
      cakeSprite.position.x = 50;
    if(cakeSprite.position.y < 50)
      cakeSprite.position.y = 50;
    if(cakeSprite.position.x > canvas_x-50)
      cakeSprite.position.x = canvas_x-50;
    if(cakeSprite.position.y > canvas_y-50)
      cakeSprite.position.y = canvas_y-50;

    c.drawSprites();
  };
};

let cakep5 = new p5(cake);
