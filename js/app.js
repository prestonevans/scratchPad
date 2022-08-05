const open = document.querySelector('.open')
const close = document.querySelector('.close')
const menu = document.querySelector('.menu')
const circleNav = document.querySelector('.circle')

open.addEventListener('click',() => {
    circleNav.style.transform = 'rotate(-90deg)'
    menu.style.transform = 'translateX(0)'
})

close.addEventListener('click',() => {
    circleNav.style.transform = ''
    menu.style.transform = 'translateX(-15vw)'

})

