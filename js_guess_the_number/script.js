//gebruiker begroeten en vragen naar naam
let min = 0;
let max = 25;
let guessedNumber;

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

alert(`Je gaat een raadspel doen en je moet een getal van 0 t/m 25 kiezen. Succes!!`);

while (guessedNumber !== randomNumber) {
    let guessedNumber = parseInt(prompt(`Voer een nummer in`)); // antwoord omzetten van string naar number met parseInt
    alert(`Je hebt het nummer ${guessedNumber} gekozen.`);
    if (guessedNumber > randomNumber) {
        alert(`Helaas, je nummer was te hoog. Probeer het opnieuw!`);
    } else if (guessedNumber < randomNumber) {
        alert(`Helaaaas, je nummer was te laag. Probeer het opnieuw!`);
    } else {
        alert(`Gefeliciteerd, je hebt gewonnen. Het nummer was ${guessedNumber}`);
        alert(`Dag ${userName}. Tot de volgende keer!`);
    }
}




