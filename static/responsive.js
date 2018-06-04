(function (window, document) {

    function resize(){
      var ww = window.innerWidth;
      if (ww > window.screen.width) {
        window.requestAnimationFrame(resize);
      }
      else{
        if (ww > 720) {
          ww = 720
        }
        // set 1rem based on iPhone6 750px width, 750/7.5=100
        document.documentElement.style.fontSize = ww / 7.5 + 'px';
        document.body.style.opacity = 1;
      }
    }

    if (document.readyState !== 'loading') {
      resize();
    }
    else {
      document.addEventListener('DOMContentLoaded', resize);
    }

    window.addEventListener('resize', resize);

  })(window, document)
