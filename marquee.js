// 🔰 Start: Cautron Optimized Splide + jsDelivr Marquee Logos

// 🚀 Wait for the DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function () {

  // ⚙️ Dynamic script loader for CDN resources (Splide.js in this case)
  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });

  // 📦 Load Splide.js from jsDelivr CDN and then execute
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js')
  ]).then(() => {

    // 🎯 Select the main Splide component container
    const el = document.querySelector('.splide.is-logos');
    if (!el) return;

    // 🎛 Initialize Splide with desired settings
    const splide = new Splide(el, {
      type: 'slide',          // horizontal continuous scroll
      autoWidth: true,        // dynamic slide widths
      arrows: false,          // hide nav arrows
      pagination: false,      // hide pagination
      drag: false,            // disable manual dragging
      gap: '4rem',            // spacing between logos
    });

    splide.mount(); // 🚀 Activate the slider

    // ♾️ Create seamless infinite scroll illusion via cloning
    const list = el.querySelector('.splide__list');
    if (list) {
      const clone = list.cloneNode(true);
      clone.classList.add('clone'); // 📛 distinguish clone visually if needed
      list.parentNode.appendChild(clone);

      // ⏩ Animate horizontal movement of both lists
      let x = 0;
      const speed = 0.5; // adjust for scroll speed

      function scroll() {
        x -= speed;
        if (Math.abs(x) >= list.scrollWidth) x = 0; // reset scroll
        list.parentNode.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(scroll); // 🔁 loop
      }

      scroll(); // ⏯ Start animation
    }

  }).catch((e) => {
    console.warn('❌ Could not load Splide:', e);
  });
});

// 🔚 End: Cautron Optimized Splide + jsDelivr Marquee Logos