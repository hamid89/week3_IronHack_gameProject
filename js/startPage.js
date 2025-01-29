// Create an audio element
const backgroundMusic = new Audio('../audios/start_sound.wav');

// Configure the audio
backgroundMusic.loop = true; // Loop the music
backgroundMusic.volume = 0.3; // Set volume (0.0 to 1.0)
backgroundMusic.muted = true; // Mute the audio initially to allow autoplay

// Function to play the background music
function playBackgroundMusic() {
backgroundMusic.play().catch((error) => {
    console.log('Autoplay was blocked by the browser. Please interact with the page to play music.');
});
}

// Play music automatically when the page loads (muted)
window.onload = () => {
playBackgroundMusic();
};

// Unmute the audio when the user interacts with the page
document.addEventListener('click', () => {
if (backgroundMusic.muted) {
    backgroundMusic.muted = false; // Unmute the audio
    console.log('Audio unmuted. Music will now play.');
}
});
    document.getElementById('start-button').addEventListener('click', () => {
        window.location.href = './game.html'; // Redirects to the game page
});