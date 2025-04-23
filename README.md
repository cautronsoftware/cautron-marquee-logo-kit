# cautron-marquee-logo-widget
🚀 Splide.js-powered marquee logo component kit by Cautron — built with jsDelivr CDN integration, fully responsive design, and pixel-perfect styling. Perfect for showcasing trusted tech providers, partners and customers on high-end websites. Crafted by Cautron Software | cautron.com
# 🌀 Cautron Infinite Marquee Logos Component

A lightweight, high-performance, **infinitely looping logo slider** powered by [Splide.js](https://splidejs.com/) and [jsDelivr](https://www.jsdelivr.com/), crafted with performance, stability and brand clarity in mind.

Built by **[Cautron Software](https://cautron.com)** to be fast, elegant, and developer-friendly — this component is perfect for showcasing partner logos, technology stacks, integrations, or awards with a touch of infinite fluidity ✨

---

## 🚀 Features

- 🔁 Seamless Infinite Scroll Illusion (with `.clone` support)
- ⚙️ Zero Dependency Auto-Load via CDN (Splide via jsDelivr)
- 🖼️ Clean HTML + Accessible ALT Tags
- 🧠 Optimized for performance & visual alignment
- 📱 Responsive & mobile-friendly (with media queries)

---

## 🧩 Recommended Logo Design for Best UI Fit
To achieve the best visual result with the default CSS styling:

- 🎨 Use a **square PNG canvas** (e.g. 500x500px)
- 🤍 Keep background transparent
- 🔲 Center your logo within the square
- 📐 Scale the logo to fill **~95% of the horizontal width**

This ensures smooth spacing, crisp rendering, and balanced layout across devices.

---

## 🔧 Technologies Used

### ▶ Splide.js
- Lightweight, extensible JS slider framework
- Used for core structure and animation loop logic
- [https://splidejs.com](https://splidejs.com)
- MIT License

### ▶ jsDelivr CDN
- Ultra-fast global CDN for open-source libraries
- Used for instantly loading Splide.js from cache
- [https://www.jsdelivr.com](https://www.jsdelivr.com)

---

## 🧩 HTML Structure
```
<section class="ctrn-marquee-logos">
  <div class="splide is-logos">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide"><img src="logo-image-link1.png" alt="Logo 1" /></li>
        <!-- Add more logos here -->
      </ul>
    </div>
  </div>
</section>
```

> ✅ Replace logo image links and ALT tags with your own content

---

## 🧠 How it Works
1. Splide is loaded from jsDelivr on `DOMContentLoaded`
2. A `.clone` of the `<ul>` list is added after mount
3. A native JS loop scrolls the track left continuously
4. When the clone reaches halfway, it resets position to 0
5. Seamless illusion of infinite flow 🎞️

---

## 🖌 Styling (SASS-ready CSS)
CSS is written with maximum modularity in mind. Fully scoped under `.ctrn-marquee-logos`.
Media queries included for better logo sizing on mobile.

```css
/* Example: .ctrn-marquee-logos .splide__slide img { height: 100%; max-height: 120px; } */
```

---

## 🧠 Attribution
- Splide.js: © Naoto Ikeda, MIT License [GitHub](https://github.com/Splidejs/splide)
- jsDelivr: © jsDelivr contributors, MIT License [GitHub](https://github.com/jsdelivr)

---

## 🎁 Licensing & Free Use
This component is offered as a **free gift to the web** by Cautron.

### Cautron License [🅒]
- Unlimited personal & commercial use
- No attribution required (but appreciated ❤️)
- Not allowed to resell without permission

> For advanced licensing or commercial inquiries, contact us via [cautron.com](https://cautron.com)

---

## 📜 License

Licensed under the MIT License.  
Copyright © 2025 [Cautron Software](https://cautron.com)

---

## 🏢 About Cautron Software
**Cautron Software** offers comprehensive digital business solutions, including:
- 🌐 Web Development
- ☁️ IT Infrastructure
- 📈 Digital Marketing
- 🎥 Media & Creative Services

Our mission is to optimize operational efficiency and empower organizations to reach their full potential.

🔗 [cautron.com](https://cautron.com)  
🔗 [business.cautron.com](https://business.cautron.com)

---

> Crafted with care, logic, and a bit of magic 🪄 — by Cautron.
