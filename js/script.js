console.clear()

gsap.registerPlugin(ScrollTrigger)

AOS.init({
  disable: false,
  debounceDelay: 50,
  throttleDelay: 120,
  offset: 100,
  duration: 600,
})

// loader

// burger click
const alterNav = document.querySelector(".alternav")
const burger = document.querySelector('.navbar__burger')

burger.addEventListener('click', function () {
  this.classList.toggle('clicked')
  alterNav.classList.toggle('active')
})

const alterOff = () => {
  alterNav.classList.remove('open');
  burger.classList.remove('active');
};

// about gsap
const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    toggleActions: 'restart none none reset',
  },
})

aboutTl.set('.about__image-mask', { autoAlpha: 1 })
aboutTl.from('.about__image-mask', {
  xPercent: -100,
  duration: 1,
  ease: Power3.easeInOut,
})
aboutTl.from('.about__image', {
  xPercent: 100,
  scale: 1.3,
  duration: 1,
  delay: -1,
  ease: Power3.easeInOut,
})

// three gsap
document.body.style.overflow = 'auto'
// document.scrollingElement.scrollTo(0, 0)

gsap.utils.toArray('.three__part').forEach((part, index) => {
  const wrapper = part.querySelector('.three__text')
  const [x, xEnd] =
    index % 2
      ? ['100%', (wrapper.scrollWidth - part.offsetWidth) * -1]
      : [wrapper.scrollWidth * -1, 0]
  gsap.fromTo(
    wrapper,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: part,
        scrub: 0.5,
      },
    }
  )
})

// services
const servicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.services',
    toggleActions: 'restart none none reset',
  },
})

servicesTl.set('.services__image-mask', { autoAlpha: 1 })
servicesTl.from('.services__image-mask', {
  xPercent: -100,
  duration: 1,
  ease: Power3.easeInOut,
})
servicesTl.from('.services__image', {
  xPercent: 100,
  scale: 1.3,
  duration: 1,
  delay: -1,
  ease: Power3.easeInOut,
})

const cardList = [...document.querySelectorAll('.services__card')]

cardList.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('expand-card')
  })
})

// projects filter
const filters = document.querySelectorAll('.projects__filter')
const cards = document.querySelectorAll('.projects__card')

filters.forEach((item) => {
  item.addEventListener('click', () => {
    // toggle active class on filter btns
    for (i = 0; i < filters.length; i++) {
      filters[i].classList.remove('active')
    }
    item.classList.add('active')

    // show cards
    cards.forEach((show) => {
      show.style.display = 'none'
      let service = item.getAttribute('data-filter')

      if (show.getAttribute('data-filter') === service || service === 'all') {
        show.style.display = 'flex'
      }
    })
  })
})

//circle
// new CircleType(document.querySelector('.numbers__circle'));
// new CircleType(document.querySelector('.numbers__circle1'));
// new CircleType(document.querySelector('.numbers__circle2'));
// new CircleType(document.querySelector('.numbers__circle3'));

let circle = [... document.querySelectorAll(".numbers__circle")] 

circle.forEach((circle) => {
  new CircleType(circle)
})

