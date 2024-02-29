document.addEventListener('DOMContentLoaded', function() {
  const introSection = document.getElementById('intro');
  introSection.style.opacity = 0;
  fadeIn(introSection, 2000);
});

function fadeIn(element, duration) {
  let op = 0;  // initial opacity
  const interval = 50;
  const increment = interval / duration;

  const timer = setInterval(function() {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      op += increment;
  }, interval);
}
