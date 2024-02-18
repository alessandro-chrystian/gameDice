let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomImageSource1 = 'img/dice' + randomNumber1 + '.png' // dice1.png

let image1 = document.querySelectorAll('img')[0].setAttribute('src', randomImageSource1)

let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomImageSource2 = 'img/dice' + randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

if( randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 1 ganhou'
} else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆 Jogador 2 ganhou'
} else {
    document.querySelector('h1').innerHTML = 'Empate'
}