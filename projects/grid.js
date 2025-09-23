    // Configuration
    const STAGGER_MS = 180; // delay between cards in ms

    // Helper: animate cards in sequence
    function animateCards() {
      const inners = document.querySelectorAll('.project-inner');
      // If user prefers reduced motion, show everything instantly
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        inners.forEach(el => el.classList.add('show'));
        return;
      }

      // remove class first so replay works
      inners.forEach(el => el.classList.remove('show'));

      inners.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('show');
        }, i * STAGGER_MS);
      });
    }

    // On DOMContentLoaded animate
    window.addEventListener('DOMContentLoaded', () => {
      animateCards();

      // Replay button hook
      const replay = document.getElementById('replayBtn');
      replay.addEventListener('click', () => {
        // small delay to allow removing class to take effect visually
        animateCards();
        // briefly focus first card for keyboard users
        document.querySelector('.project-inner')?.focus();
      });
    });