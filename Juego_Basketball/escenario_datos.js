function comenzar(){
    let elemento = document.getElementById("lienzo");
    lienzo = elemento.getContext("2d");

    lienzo.canvas.width = window.innerWidth;
    lienzo.canvas.height = window.innerHeight;

    console.log(lienzo.canvas.width);
    console.log(lienzo.canvas.height);

    fondo();
    edificios();
    arbustos();
    cancha();
    balon();
    canasta();
    
}

//FUNCIONES
//FONDO
function fondo(){
    let grd = lienzo.createLinearGradient(lienzo.canvas.width/2, 0, lienzo.canvas.width/2, lienzo.canvas.height);
    grd.addColorStop(0, "#87CEFA");
    grd.addColorStop(1, "#E0FFFF");

    lienzo.fillStyle = grd;
    lienzo.fillRect(0, 0, lienzo.canvas.width, lienzo.canvas.height);
}


//CANCHA
function cancha(){
    lienzo.fillStyle = "#F4A460";
    lienzo.strokeStyle = "#D2691E";

    lienzo.fillRect(0, (lienzo.canvas.height/2) + 140, lienzo.canvas.width, 20);
    lienzo.strokeRect(0, (lienzo.canvas.height/2) + 140, lienzo.canvas.width, 20);

    lienzo.strokeStyle = "white";
    lienzo.lineWidth = 5;
    lienzo.beginPath();
    lienzo.moveTo((lienzo.canvas.width/2) - 410, (lienzo.canvas.height/2) + 140);
    lienzo.lineTo((lienzo.canvas.width/2) - 410, (lienzo.canvas.height/2) + 160);
    lienzo.stroke();

    lienzo.fillStyle = "#A0522D";
    lienzo.strokeStyle = "#8B4513";
    lienzo.lineWidth = 4;

    lienzo.fillRect(0, (lienzo.canvas.height/2) + 160, lienzo.canvas.width, (lienzo.canvas.height/2) - 160);
    lienzo.strokeRect(3, (lienzo.canvas.height/2) + 163, lienzo.canvas.width - 7, (lienzo.canvas.height/2) - 166);
}


//BALON
function balon(){
    lienzo.fillStyle = "#D2691E";
    lienzo.strokeStyle = "#8B4513";
    lienzo.lineWidth = 3;

    lienzo.beginPath();
    lienzo.arc((lienzo.canvas.width/2) - 400, (lienzo.canvas.height/2) + 20, 25, 0, Math.PI*2, false);
    lienzo.fill();
    lienzo.stroke();

    lienzo.fillStyle = "black";
    lienzo.strokeStyle = "black";
    lienzo.lineWidth = 2;
    lienzo.beginPath();
    lienzo.moveTo((lienzo.canvas.width/2) - 400, (lienzo.canvas.height/2) - 5);
    lienzo.lineTo((lienzo.canvas.width/2) - 400, (lienzo.canvas.height/2) + 45);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo((lienzo.canvas.width/2) - 425, (lienzo.canvas.height/2) + 21); 
    lienzo.lineTo((lienzo.canvas.width/2) - 375, (lienzo.canvas.height/2) + 21);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo((lienzo.canvas.width/2) - 418, (lienzo.canvas.height/2) + 3); //83, 335
    lienzo.quadraticCurveTo((lienzo.canvas.width/2) - 400, 
    (lienzo.canvas.height/2) + 25, (lienzo.canvas.width/2) - 382, (lienzo.canvas.height/2) + 3);
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.moveTo((lienzo.canvas.width/2) - 417, (lienzo.canvas.height/2) + 38); //83, 385
    lienzo.quadraticCurveTo((lienzo.canvas.width/2) - 400, 
    (lienzo.canvas.height/2) + 18, (lienzo.canvas.width/2) - 383, (lienzo.canvas.height/2) + 38);
    lienzo.stroke();
}


//ARBUSTOS
function arbustos(){
    lienzo.fillStyle = "#5BEE5B";
    lienzo.strokeStyle = "#32CD32";
    lienzo.lineWidth = 3;

   let x1 = 0;
   let x2 = 0;

   for(let i = 0; i < 15; i++){
    lienzo.beginPath();
    lienzo.arc(x2, (lienzo.canvas.height/2) + 77, 60, 0, Math.PI, true)
    lienzo.stroke();
    lienzo.fill();

    x2+=125;
   }

   //lienzo.fillRect(0, (lienzo.canvas.height/2) + 77, lienzo.canvas.width, (lienzo.canvas.height/2) - 191);
   lienzo.fillRect(0, (lienzo.canvas.height/2) + 77, lienzo.canvas.width, 150);

   lienzo.fillStyle = "#32CD32";
   lienzo.strokeStyle = "#228B22";

   for(let i = 0; i < 15; i++){
    lienzo.beginPath();
    lienzo.arc(x1, (lienzo.canvas.height/2) + 97, 50, 0, Math.PI, true)
    lienzo.stroke();
    lienzo.fill();

    x1+=100;
   }

   //lienzo.fillRect(0, (lienzo.canvas.height/2) + 87, lienzo.canvas.width, (lienzo.canvas.height/2) - 201);
   lienzo.fillRect(0, (lienzo.canvas.height/2) + 87, lienzo.canvas.width, 100);
   
}


//EDIFICIOS
function edificios(){
    lienzo.fillStyle = "#C0C0C0";
    lienzo.strokeStyle = "#A9A9A9";

    let x = (lienzo.canvas.width/2) - 537;
    let y = (lienzo.canvas.height/2) - 233;

    for(let i = 0; i < 15; i++){
        lienzo.fillRect(x, y, 100, 375);
        lienzo.strokeRect(x, y, 100, 375);
        if(y <= 20){
            y += 150;
        }
        else{
            y = 20;
        }
        x+=200;
    }
}


//CANASTA
function canasta(){
    lienzo.strokeStyle = "#A9A9A9";
    lienzo.lineWidth = 10;
    lienzo.lineCap= "round";

    lienzo.beginPath();
    lienzo.moveTo((lienzo.canvas.width/2) + 538, (lienzo.canvas.height/2) - 118); //1085, 135
    lienzo.lineTo((lienzo.canvas.width/2) + 503, (lienzo.canvas.height/2) - 183); //1050, 70
    lienzo.stroke();

    lienzo.fillStyle = "white";
    lienzo.strokeStyle = "#DCDCDC";
    lienzo.lineWidth = 2;

    lienzo.fillRect((lienzo.canvas.width/2) + 528, (lienzo.canvas.height/2) - 113, 
    20, 227); //1075, 140, 20, 227
    lienzo.strokeRect((lienzo.canvas.width/2) + 528, (lienzo.canvas.height/2) - 113, 
    20, 227); //1075, 140, 20, 227

    lienzo.fillRect((lienzo.canvas.width/2) + 488, (lienzo.canvas.height/2) + 115, 
    60, 23); //1035, 368, 60, 23
    lienzo.strokeRect((lienzo.canvas.width/2) + 488, (lienzo.canvas.height/2) + 115, 
    60, 23); //1035, 368, 60, 23

    lienzo.fillRect((lienzo.canvas.width/2) + 483, (lienzo.canvas.height/2) - 248, 15, 135);
    lienzo.strokeRect((lienzo.canvas.width/2) + 483, (lienzo.canvas.height/2) - 248, 15, 135);

    lienzo.strokeStyle = "white";
    lienzo.lineWidth = 4;
    lienzo.beginPath();
    lienzo.moveTo((lienzo.canvas.width/2) + 483, (lienzo.canvas.height/2) - 153); //1030,100
    lienzo.lineTo((lienzo.canvas.width/2) + 473, (lienzo.canvas.height/2) - 63); //1020, 190
    lienzo.lineTo((lienzo.canvas.width/2)+ 423, (lienzo.canvas.height/2) - 63); //970, 190
    lienzo.lineTo((lienzo.canvas.width/2) + 413, (lienzo.canvas.height/2) - 153); //960, 100
    lienzo.lineTo((lienzo.canvas.width/2) + 483, (lienzo.canvas.height/2) - 153);
    lienzo.stroke();
    lienzo.clip()

    lienzo.lineWidth = 1;
    lienzo.beginPath();
    let x1 = (lienzo.canvas.width/2) + 473;
    let x2 = (lienzo.canvas.width/2) + 493; 

    for(let i = 0; i < 20; i++){
        lienzo.moveTo(x1, (lienzo.canvas.height/2) - 153);
        lienzo.lineTo(x2, (lienzo.canvas.height/2) - 63);
        lienzo.stroke();

        x1 -= 10;
        x2 -= 10;
    }


    lienzo.beginPath();
    let x_1 = (lienzo.canvas.width/2) + 423;
    let x_2 = (lienzo.canvas.width/2) + 403;

    for(let i = 0; i < 20; i++){
        lienzo.moveTo(x_1, (lienzo.canvas.height/2) - 153);
        lienzo.lineTo(x_2, (lienzo.canvas.height/2) - 63);
        lienzo.stroke();

        x_1 += 10;
        x_2 += 10;
    }
}
    

window.addEventListener("load", comenzar, false);