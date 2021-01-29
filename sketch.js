            var balloon, background, balloonIMG, backgroundIMG;

    function preload(){
            backgroundIMG = loadImage("pics/background.png");
            balloonIMG = loadAnimation("pics/POne.png, pics/PTwo.png, pics/PThree.png")
            }

    function setup(){
            database = firebase.database();
            console.log(database);

            createCanvas(500,500);

            balloon = createSprite(100,400,20,20);
            balloon.addAnimation("balloon", balloonIMG);
            balloon.scale = 0.4;

            }

    function draw(){
            background(backgroundIMG);
            if(keyDown(LEFT_ARROW)){
                writePosition(-1,0);
            }
            else if(keyDown(RIGHT_ARROW)){
                writePosition(1,0);
            }
            else if(keyDown(UP_ARROW)){
                writePosition(0,-1);
            }
            else if(keyDown(DOWN_ARROW)){
                writePosition(0,+1);
            }
            drawSprites();
            }


