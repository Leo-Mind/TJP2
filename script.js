const hamburger=document.querySelector('#hamburg')
const nav=document.querySelector('.nav2')
const close=document.querySelector('#close-menu')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.add('hide');
    close.classList.remove('hide')
    nav.classList.toggle('visible')
})


close.addEventListener('click', ()=> {
    hamburger.classList.remove('hide');
    close.classList.add('hide')
    nav.classList.toggle('visible')
})

