window.onscroll = function() {scrollFunction()};

let shhCount = 0;

let audio1 = document.getElementById("audio1");
audio1.volume = 1


let audio2 = document.getElementById("audio2");
audio2.volume = 0

let shh = document.getElementById("shh");

function scrollFunction() {



  if (document.body.scrollTop > 5.5*innerHeight || document.documentElement.scrollTop > 5.5*innerHeight) {
    document.getElementById("cinemaScreen").style.transform = "scaleX(100%)";
    audio1.volume = 0;
    audio2.volume = 1;
    
  } else {
    document.getElementById("cinemaScreen").style.transform = "scaleX(0%)";
  }

  if (document.body.scrollTop > 12*innerHeight || document.documentElement.scrollTop > 12*innerHeight) {
    audio1.volume = 1;
    audio2.volume = 0;

}

//  if (document.body.scrollTop > 5*innerHeight || document.documentElement.scrollTop > 5*innerHeight) {

//    if (document.body.scrollTop > 6*innerHeight || document.documentElement.scrollTop > 6*innerHeight) {
//        shh.currentTime = 0;
//        shh.pause();
//    }else{

//    if (shhCount = 0){
//      shh.play();
//      shhCount = shhCount + 1
//    }
//  }
//  } 
// else{
//   shh.currentTime = 0;
//   shh.pause();
// }
}
