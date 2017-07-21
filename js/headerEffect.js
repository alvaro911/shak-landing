(function() {
  var headline = document.querySelector('.trigger-headline'),
    segmenter = new Segmenter(document.querySelector('.segmenter'), {
      pieces: 8,
      positions: [
        {top: 0, left: 0, width: 100, height: 100},
        {top: 0, left: 0, width: 100, height: 100},
        {top: 0, left: 0, width: 100, height: 100},
        {top: 0, left: 0, width: 100, height: 100},
        {top: 0, left: 0, width: 100, height: 100},
        {top: 0, left: 0, width: 100, height: 100},
        {top: 0, left: 0, width: 100, height: 100},
        {top: 0, left: 0, width: 100, height: 100}
      ],
      shadows: false,
      parallax: true,
      parallaxMovement: {min: 10, max: 30},
      animation: {
        duration: 2500,
        easing: 'easeOutExpo',
        delay: 0,
        opacity: .1,
        translateZ: {min: 10, max: 25}
      },
    });

    function blur() {

      segmenter.animate();
      headline.classList.remove('trigger-headline--hidden');
    }

    setTimeout(blur, 2000)

})();
