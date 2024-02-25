let btn = document.querySelector('.rollDices')
let resultAnnouncer = document.querySelector('h1')
let diceImage = document.querySelectorAll('img')

btn.addEventListener('click', function() {
    let randomNumber1 = Number(Math.floor(Math.random() * 6 + 1))
    let randomNumber2 = Number(Math.floor(Math.random() * 6 + 1))
    
    diceImage[0].setAttribute('src', 'img/dice' + randomNumber1 + '.png')
    diceImage[1].setAttribute('src', 'img/dice' + randomNumber2 + '.png')
    

    if(randomNumber1 > randomNumber2) {
        resultAnnouncer.innerHTML = 'Jogador 1 venceu!'
    } else if(randomNumber2 > randomNumber1) {
        resultAnnouncer.innerHTML = 'Jogador 2 venceu!'
    } else {
        resultAnnouncer.innerHTML = 'Empate!'
    }
})