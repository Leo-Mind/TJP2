const hamburger=document.querySelector('#hamburg')
const nav=document.querySelector('.nav2')

hamburger.addEventListener('click', ()=> {
    nav.classList.toggle('visible')
})