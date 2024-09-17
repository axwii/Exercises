// Generer et tilfældigt tal mellem 0 og 100
const randomNumber = Math.floor(Math.random() * (100 + 1));

const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const celebration = document.getElementById('celebration');

guessButton.addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    
    // Tjek om brugeren har gættet korrekt
    if (userGuess === randomNumber) {
        feedback.textContent = 'Korrekt! Du gættede det rigtige tal!';
        feedback.style.color = 'green';
        celebration.style.display = 'block';  // Vis fejringsgrafikken
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'For lavt! Prøv igen.';
        feedback.style.color = 'red';
        celebration.style.display = 'none';
    } else {
        feedback.textContent = 'For højt! Prøv igen.';
        feedback.style.color = 'red';
        celebration.style.display = 'none';
    }
});

