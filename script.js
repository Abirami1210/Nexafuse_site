let started = false;

  function animateCountToK(element, targetK, duration) {
    let current = 0;
    const steps = targetK;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      current++;
      element.textContent = `${current}k`;
      if (current >= targetK) {
        clearInterval(interval);
      }
    }, intervalTime);
  }

  // Scroll detection
  window.addEventListener('scroll', () => {
    const counter = document.getElementById('clientCounter');
    const topPosition = counter.getBoundingClientRect().top;

    if (topPosition < window.innerHeight && !started) {
      started = true;
      animateCountToK(counter, 25, 2000); // Count to 25k in 1.5 seconds
    }
  });


  let hasStarted = false;

    function countClients1Plus(element, start, end, duration) {
      let current = start;
      const steps = end - start;
      const intervalTime = duration / steps;

      const interval = setInterval(() => {
        current++;
        element.textContent = `${current}+`;
        if (current >= end) {
          clearInterval(interval);
        }
      }, intervalTime);
    }

    window.addEventListener('scroll', () => {
      const counter = document.getElementById('clientCounter1');
      const section = document.getElementById('clientsSection1');
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < window.innerHeight && !hasStarted) {
        hasStarted = true;
        countClients1Plus(counter, 0, 50, 3000); // 50+ to 75+ in 2 seconds
      }
    });