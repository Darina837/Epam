let total = 0;
let numbers = 5;
let prize = 0;
let count = 100;
let play = confirm('Do you want to play a game?');
function startPlay() {
    if (!play) {
        alert('You did not become a billionaire, but can.');
    } else {
        onPlay();
    }
}
function onPlay() {
    let attempts = 3;
    prize = count;
    let random = Math.floor( Math.random() * (numbers + 1) );
    let userNumber1 = prompt(` 
    ${random}
    Choose a roulette pocket number from 0 to ${numbers}
    Attempts left: ${attempts}
    Total prize ${total}$
    Possible prize on current attempt: ${prize}$`, Number('')); //первая попытка
    if(userNumber1 === null) {
        goOut();
    } else if (Number(userNumber1) !== random) {
        prize = prize / Number('2');
        attempts = attempts - 1;
        let userNumber2 = prompt(`
    Choose a roulette pocket number from 0 to ${numbers}
    Attempts left: ${attempts}
    Total prize ${total}$
    Possible prize on current attempt: ${prize}$`, Number('')); //вторая попытка
    if(userNumber2 === null) {
        goOut();
    } else if (Number(userNumber2) !== random) {
            prize = prize / Number('2');
            attempts = attempts - 1;
            let userNumber3 = prompt(`
    Choose a roulette pocket number from 0 to ${numbers}
    Attempts left: ${attempts}
    Total prize ${total}$
    Possible prize on current attempt: ${prize}$`, Number('')); //третья попытка
    if(userNumber3 === null) {
        goOut();
    } else if (Number(userNumber3) !== random) {
                alert(`Thank you for your participation. Your prize is: ${total}$`);
                let playAg = confirm('Do you want to play again?');
                if(playAg) {
                    onPlay();
                }
            } else {
                win(); //выигрыш на третьей попытке
            }
        } else {
            win(); //выигрыш на второй попытке
        }
    } else { 
        win(); //выигрыш на первой попытке
    }
}
function win() {
    total = total + prize;
    let win = confirm(`Congratulation, you won! Your prize is: ${total}$. Do you want to continue?`);
    if (!win) {
        goOut();
    } else {
        numbers = numbers * Number('2');
        count = count * Number('2');
        onPlay();
    }
}
function goOut() {
    alert(`Thank you for your participation. Your prize is: ${total}$`);
    total = 0;
}
startPlay();