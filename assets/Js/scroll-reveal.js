const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// HOME
sr.reveal('.home__title', {})
sr.reveal('.home__subtitle', {})
sr.reveal('.home__description', {})
sr.reveal('.home__img', {})
sr.reveal('.home__button', {delay: 100})
sr.reveal('.home__social-icon', {interval: 200})

// ABOUT
sr.reveal('.about__img', {})
sr.reveal('.about__description', {})
sr.reveal('.about__info-title', {interval: 100})
sr.reveal('.about__info-name', {interval: 200})
sr.reveal('.about_button', {delay: 100})

