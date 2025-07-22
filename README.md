# 🎯 Testimonials Grid Section

This is a solution to the [Testimonials Grid Section challenge](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7) on [Frontend Mentor](https://www.frontendmentor.io). The goal is to build a fully responsive testimonial grid layout using **semantic HTML** and modern **CSS Grid** practices.

---

## 🔍 Overview

This challenge tests your ability to:

- Create **asymmetric layouts** using `grid-template-areas`
- Build a layout that adjusts fluidly across screen sizes
- Write maintainable, mobile-first CSS with minimal overrides
- Use `clamp()` and `max()` for elegant responsive spacing
- Apply global transitions for smooth component appearance

---

## 🚀 Live Demo

- 🔗 [View Live Project](#)  
- 📄 [Challenge Link](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7)

---

## 🖼 Screenshot

![Testimonials Grid Preview](./preview.jpg)

---

## 🧠 What I Learned

### ✅ CSS Grid Mastery

- `grid-template-areas` makes layout visually descriptive and easier to manage.
- Defined distinct areas for each testimonial card (`card-1`, `card-2`, etc.) to give complete control over placement at every breakpoint.

```css
@media (min-width: 768px) {
  .grid-container {
    grid-template-areas:
      "card-1 card-1 card-2 card-5"
      "card-3 card-4 card-4 card-5";
    grid-template-columns: repeat(4, 1fr);
  }
}
