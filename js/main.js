

const start = document.getElementById("start");
const select = document.getElementById("select");
const siguiente = document.getElementById("a");
const anterior = document.getElementById("b");
const  screen = document.getElementById("video");


var numvideo = 0;
var pressAB =false;
var statusVideo = false;

start.addEventListener("click", () => iniciar());
select.addEventListener("click", () => apagar());
siguiente.addEventListener("click", () => reproducir(false));
anterior.addEventListener("click", () => reproducir(true));
screen.addEventListener("ended", () => reproducir(false));


function iniciar() {

    if(screen.style.display = 'none'){
        screen.style.display = 'flex';
        numvideo = 0;
        screen.play();
        statusVideo = true;                    
    }else if(screen.style.display = 'flex'){
        screen.style.display = 'none';
        screen.pause();
        statusVideo = false;
    }

}


function reproducir(pressAB){

        if(screen.style.display = 'flex'){

            if(pressAB === false){

                if(numvideo===3){
                    numvideo=1;
                }else{
                    numvideo++;
                }
            }else if(pressAB === true){

                if(numvideo===1){
                    numvideo=3;
                }else{
                    numvideo--;
                }

            }

            selectVideo();
            screen.play();

    }else if(screen.style.display = 'none'){

    }

return numvideo;

}


function selectVideo(){

    switch(numvideo){
        case 0:
            screen.src = "./videos/Video0.mp4";
        break;

        case 1:
            screen.src = "./videos/Video1.mp4";
        break;

        case 2:
            screen.src = "./videos/Video2.mp4";
        break;

        case 3:
            screen.src = "./videos/Video3.mp4";
        break;
    }    

}


function apagar(){

    numvideo = 0;
    pressAB = false;

    screen.pause();
    screen.style.display = 'none';
    screen.src = "./videos/Video0.mp4";

return numvideo, pressAB;

}