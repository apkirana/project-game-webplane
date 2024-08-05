const character = document.getElementById('character');
const collectible = document.getElementById('collectible');
const container = document.getElementById('gameContainer');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

let score = 0;
const step = 10; // Number of pixels the character moves per step
const containerBounds = container.getBoundingClientRect();

document.addEventListener('keydown', (event) => {
    let characterBounds = character.getBoundingClientRect();

    switch (event.key) {
        case 'ArrowUp':
            if (characterBounds.top > containerBounds.top) {
                character.style.top = `${character.offsetTop - step}px`;
            }
            break;
        case 'ArrowDown':
            if (characterBounds.bottom < containerBounds.bottom) {
                character.style.top = `${character.offsetTop + step}px`;
            }
            break;
        case 'ArrowLeft':
            if (characterBounds.left > containerBounds.left) {
                character.style.left = `${character.offsetLeft - step}px`;
            }
            break;
        case 'ArrowRight':
            if (characterBounds.right < containerBounds.right) {
                character.style.left = `${character.offsetLeft + step}px`;
            }
            break;
    }

    checkCollision();
});

function checkCollision() {
    const characterBounds = character.getBoundingClientRect();
    const collectibleBounds = collectible.getBoundingClientRect();

    if (
        characterBounds.left < collectibleBounds.right &&
        characterBounds.right > collectibleBounds.left &&
        characterBounds.top < collectibleBounds.bottom &&
        characterBounds.bottom > collectibleBounds.top
    ) {
        score += 1;
        scoreDisplay.textContent = `Score: ${score}`;
        moveCollectible();
    }
}

function moveCollectible() {
    const maxLeft = container.clientWidth - collectible.clientWidth;
    const maxTop = container.clientHeight - collectible.clientHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    collectible.style.left = `${randomLeft}px`;
    collectible.style.top = `${randomTop}px`;
}

restartButton.addEventListener('click', () => {
    character.style.top = '225px';
    character.style.left = '225px';
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    moveCollectible();
});

moveCollectible(); // Initialize the position of the collectible