// Scroll reveal

function changeWidth() {
    var scroll = (window.pageYOffset / 5);
    var width = scroll;
    // var width = Math.min(100 - scroll);

    document.getElementById('expand').style.width = width + '%';
  }

  window.addEventListener('scroll', function(){
    requestAnimationFrame(changeWidth);
  })