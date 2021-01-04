let pause = document.querySelector('.pause')
let play = document.querySelector('.play')


pause.addEventListener('click', (e) => {
    pause.style.display = 'none'
    play.style.display = 'contents'
})

play.addEventListener('click', (e) => {
    play.style.display = 'none'
    pause.style.display = 'contents'
})