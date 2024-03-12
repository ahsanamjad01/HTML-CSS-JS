// script.js
const character = document.getElementById('character');
let isMovingRight = true;

document.addEventListener('click', jump);
document.addEventListener('keydown', handleKeyPress); // Listen for arrow key presses

function jump() {
    character.classList.add('animate');
    setTimeout(() => {
        character.classList.remove('animate');
    }, 300);
}

function handleKeyPress(event) {
    const gameWidth = document.getElementById('game').clientWidth;
    const characterWidth = character.clientWidth;

    if (event.key === 'ArrowLeft') {
        // Move left
        character.style.left = `${Math.max(0, parseInt(character.style.left) - 20)}px`;
    } else if (event.key === 'ArrowRight') {
        // Move right
        character.style.left = `${Math.min(gameWidth - characterWidth, parseInt(character.style.left) + 20)}px`;
    }
}
