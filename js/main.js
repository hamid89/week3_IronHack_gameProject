
// Create an audio element
const backgroundMusic = new Audio('../audios/marios_background_sound.wav')

// Configure the audio
backgroundMusic.loop = true // Loop the music
backgroundMusic.volume = 0.3 // Set volume (0.0 to 1.0)
backgroundMusic.muted = true // Mute the audio initially to allow autoplay

// Function to play the background music
function playBackgroundMusic() {
backgroundMusic.play().catch((error) => {
    console.log('Autoplay was blocked by the browser. Please interact with the page to play music.')
})
}

// Play music automatically when the page loads (muted)
window.onload = () => {
playBackgroundMusic()
}

// Unmute the audio when the user interacts with the page
document.addEventListener('keydown', () => {
if (backgroundMusic.muted) {
    backgroundMusic.muted = false  // Unmute the audio
    console.log('Audio unmuted. Music will now play.') 
}
}) 

// jump music
const jumpMusic = new Audio("../audios/jump_sound.wav")
jumpMusic.volume = 0.5
jumpMusic.muted = false

function PlayJumpMusic(){
  // Pause background music temporarily
  // backgroundMusic.pause()

  // Play jump sound
  jumpMusic.currentTime = 13
  jumpMusic.play().catch((error) => {
    console.log('Jump sound could not be played. Error:', error)
  })

    // Resume background music after jump sound finishes
    //  jumpMusic.onended = () => {
   //   backgroundMusic.play()
//  }
}

// Instantiate the player
const player = new Player() 
const obstaclesArr = []  // Array to store obstacles

// Periodically create new obstacles
setInterval(() => {
    const newObstacle = new Obstacle() 
    obstaclesArr.push(newObstacle) 
}, 1000) 

// Update obstacles and check for collisions
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance, i, arr) => {
        obstacleInstance.moveDown() 

        // Remove obstacles that leave the screen
        if (obstacleInstance.positionY <= 0) {
            obstacleInstance.obstacleElm.remove()  // Remove from DOM
            arr.splice(i, 1)  // Remove from array
        }

        // Check for collisions only if the player is on the ground
        if (!player.isJumping && player.positionY <= 5) {
            if (
                player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
                player.positionX + player.width > obstacleInstance.positionX &&
                player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
                player.positionY + player.height > obstacleInstance.positionY
            ) {
                // Collision detected
                localStorage.setItem('elapsedTime', `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)  
                window.location.href = './gameover.html'   // Redirect after music ends
                 
               
            }
        }
    }) 
}, 30) 

// Handle player controls
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        player.moveLeft() 
        PlayJumpMusic()
    } else if (event.code === "ArrowRight") {
        player.moveRight() 
        PlayJumpMusic()
    } else if (event.code === "ArrowUp") {
        player.jump() 
        PlayJumpMusic()
    }
}) 

    // Initialize variables for minutes and seconds
    let minutes = 0  
    let seconds = 0  

    // Update the timer every second
    function updateTimer() {
      seconds++  
      if (seconds === 60) {
        minutes++  
        seconds = 0  
      }
      // Format minutes and seconds to always display two digits
      const formattedMinutes = String(minutes).padStart(2, '0')  
      const formattedSeconds = String(seconds).padStart(2, '0')  
      document.getElementById('timer').textContent = `${formattedMinutes}:${formattedSeconds}`  
    }

    // Start the timer
    setInterval(updateTimer, 1000)  
