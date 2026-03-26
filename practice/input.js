const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let x=0;
let y=0;

let vx=5;
let vy=5;

let gravity = 1;

function animate(){
    ctx.clearRect(0, 0, 500, 500);

    ctx.fillRect(x, y, 50, 50);
    requestAnimationFrame(animate);
    
}

animate();


function handleKeyDown(e){
    if(e.key == "ArrowDown"){
        y=y +vy;
    }
    if(e.key == "ArrowUp"){
        y=y -vy;
    }
    if(e.key == "ArrowLeft"){
        x=x -vx;
    }
    if(e.key == "ArrowRight"){
        x=x +vx;
    }
}

//event listener

document.addEventListener('keydown', handleKeyDown);