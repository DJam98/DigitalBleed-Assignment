// Scroll reveal
/*
function changeWidth() {
    var scroll = (window.pageYOffset / 5);
    var width = scroll;
    // var width = Math.min(100 - scroll);

    document.getElementById('expand').style.width = width + '%';
  }

  window.addEventListener('scroll', function(){
    requestAnimationFrame(changeWidth);
  }) */

  function setup(){
    createCanvas(innerWidth, innerHeight)
  }

  function draw (){
    background ('red')
    strokeWeight (5)
    stroke ('black')
    fill ('transparent')
    rect (innerWidth/10, innerHeight/3, innerWidth/5*4, innerHeight/3)


  }

