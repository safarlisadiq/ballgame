let ball = document.querySelector('#top');
let bar = document.querySelector('#seki');
let barX = 0;
let ballX = 0; 
let ballY = 0;
let x=1;
let y=1;

onkeydown = barMove;

function barMove(e){
   
    if(e.keyCode == 39){
        if(barX<500){
            barX += 25;
        }
    }

    if(e.keyCode == 37){
        if(barX>0){
            barX-=25;
        }
    }


    bar.style.left = barX + "px";

}
// setInterval( ballMove, 100 )

function ballMove() {
    if( ballX>0 || ballX<600){

        x+=5;
    }
   if( ballY>0 || ballY<500 ){
       y+=5
   }

        ball.style.left = x + "px";
        ball.style.top = y + "px";
    
}



