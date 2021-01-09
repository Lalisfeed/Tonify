let pause = document.querySelector('.pause')
let play = document.querySelector('.play')
let seeker = document.querySelector(".seeker"); 
let volume = document.querySelector(".volume"); 
let volume;
let trackNow;

pause.addEventListener('click', (e) => {
    pause.style.display = 'none'
    play.style.display = 'contents'
})

play.addEventListener('click', (e) => {
    play.style.display = 'none'
    pause.style.display = 'contents'
})

function setVolume() { 
    volume = volume.value / 100; 
} 

function setTo() { 
    trackNow = trackNow.value / 100; 
} 