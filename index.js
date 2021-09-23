// Code your solutions in this file
function writeCards(names, event) {
    let nameCards = [];
    for (let i = 0; i < names.length; i++) {
        nameCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return nameCards;
}

function countDown(x) {
    while (x >= 0) {
        console.log(x);
        x--;
    }
}