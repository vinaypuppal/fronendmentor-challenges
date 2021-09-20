# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/solutions/simple-responsive-music-plan-card-using-just-html-and-css-aoxV5JlbbB). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

Simple responsive Order summary card challenge on Frontend Mentor using just HTML and CSS

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_900/Screenshots/hm9qvxiql0kv0as2boqw.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/simple-responsive-music-plan-card-using-just-html-and-css-aoxV5JlbbB](https://www.frontendmentor.io/solutions/simple-responsive-music-plan-card-using-just-html-and-css-aoxV5JlbbB)
- Live Site URL: [https://fronendmentor-challenges-order-summary-component-main.vercel.app/](https://fronendmentor-challenges-order-summary-component-main.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

By using CSS variables and setting base font-size on `:root` allowed me to use `rems` for other properties allowed me update these values on small screens just by updating one variable i.e `--font-base` like shown below.

```css
:root {
  --font-base: 16px;
  font-size: var(--font-base);
}

.card h1 {
  font-size: 1.5rem;
}

.cta button {
  padding: 0.8rem;
}
```

```css
@media (max-width: 400px) {
  :root {
    --font-base: 14px;
  }
}
```

## Author

- Website - [VinayPuppal](https://www.vinaypuppal.com)
- Frontend Mentor - [@vinaypuppal](https://www.frontendmentor.io/profile/vinaypuppal)
- Twitter - [@vinaypuppal](https://www.twitter.com/vinaypuppal)
