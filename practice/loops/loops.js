let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

for (let x=0; x<800; x+=100){
for (let y=0; y<=250; y+=100){
    ctx.fillRect(x, y, 80, 30);
}
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

for (let y=100; y<=800; y+=100){
for (let x=0; x<=800; x+=100){

    if (y>x){
      ctx.fillRect(x, y, 80, 30);  
    }
    
}
}


canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

for (let y=0; y<=800; y+=100){
for (let x=0; x<=800; x+=100){

    if (y>x || y<x){
      ctx.fillRect(x, y, 80, 30);  
    }
    
}
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

for (let y=0; y<=800; y+=200){
for (let x=0; x<=800; x+=200){

    
      ctx.fillRect(x, y, 100, 100);  
}
}
for (let y=100; y<=800; y+=200){
for (let x=100; x<=800; x+=200){

    
      ctx.fillRect(x, y, 100, 100);  
}
}