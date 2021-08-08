//gebruiker begroeten en vragen naar naam
let min = 0;
let max = 25;
let numberOfGuesses = 5;

let userName = prompt(`Welcome!! Wat is je naam?`);
alert(`Hey ${userName}`);

// function voor random getal laten kiezen
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
let randomNumber = getRandomIntInclusive(min, max);  
console.log(`Het juiste getal is ${randomNumber}`);


// //antwoord omzetten van string naar number met parseInt

let guessedNumber = parseInt(prompt(`Voer een nummer in van 0 tot 25 om te beginnen met raden .....`));
alert(`Jouw gekozen nummer is ${guessedNumber}`);


while(guessedNumber !== randomNumber && numberOfGuesses > 1) {      
    numberOfGuesses--;
    guessedNumber = parseInt(prompt(`Helaas, dit is niet correct. Je hebt nog ${numberOfGuesses} keuze(s) over. Voer nogmaals een nummer in`));
}
if(numberOfGuesses > 1) {
    alert(`Gefeliciteerd, je hebt gewonnen"`);
    alert(`Dag ${userName}. Tot de volgende keer!`);
    }
else {
    alert(`Helaas, je hebt je maximale aantal kansen gehad. Het juist nummer was ${randomNumber}`);
}


// zo kan het ook!!

let guessedNumber; 
while(guessedNumber !== randomNumber) {
    if(numberOfGuesses < 1) {
        alert(`Helaas, je hebt je maximale aantal kansen gehad. Het juist nummer was ${randomNumber}`);
        numberOfGuesses = 5;
    }
    guessedNumber = parseInt(prompt(`Je hebt nog ${numberOfGuesses} keuze(s) over. Voer een nummer in`));
    if (guessedNumber > randomNumber) {
        numberOfGuesses--;
        alert(`Helaas, je nummer was te hoog. Probeer het opnieuw!`);
    } else if (guessedNumber < randomNumber) {
        numberOfGuesses--;
        alert(`Helaaaas, je nummer was te laag. Probeer het opnieuw!`);
    } else {
        alert(`Gefeliciteerd, je hebt gewonnen. Het nummer was ${guessedNumber}`);
        alert(`Dag ${userName}. Tot de volgende keer!`);
    }
}

///werkt zo wel. let guessedNumber(); op die plek

