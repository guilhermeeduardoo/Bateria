document.body.addEventListener('keydown',(event) => {
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value

    if(song !== '') {
        let songArray = song.split('')
        playComposicao(songArray)
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let elementKey = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement) {
        audioElement.currentTime = 0 /* Serve para zerar o audio sempre que for ativado novamente */
        audioElement.play()
    }

    if(elementKey) {
        elementKey.classList.add('active')
        setTimeout(() => {
            elementKey.classList.remove('active')
        }, 200)
    }
}

function playComposicao(songArray) {
    let wait = 0

    for(let itemMusica of songArray) {
        setTimeout(() => {
            playSound(`key${itemMusica}`)
        }, wait)

        wait += 250 
    } 
}