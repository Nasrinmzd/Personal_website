const navToggleIcon = document.querySelector(".nav__toggle-icon")
const menu = document.querySelector(".menu")
const cover = document.querySelector(".cover")
const resumeListItems = document.querySelectorAll(".resume-list__item")
const portfolioListItems = document.querySelectorAll('.portfolio-list__item')

navToggleIcon.addEventListener('click', function(){
    this.classList.toggle('nav__toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})


resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click', function(){
        document.querySelector('.resume-list__item--active').classList.remove('resume-list__item--active')
        document.querySelector('.resume-content--show').classList.remove('resume-content--show')
        this.classList.add('resume-list__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('resume-content--show')
    })
})


portfolioListItems.forEach(portfolioListItem => {
    portfolioListItem.addEventListener('click', function(){
        document.querySelector('.portfolio-list__item--active').classList.remove('portfolio-list__item--active')
        document.querySelector('.portfolio-content--show').classList.remove('portfolio-content--show')
        this.classList.add('portfolio-list__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('portfolio-content--show')
    })
})
