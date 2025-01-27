
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
                window.location.href = '../gameOver.html'
                //console.log("game over...") 
                //location.href = "../gameover.html" 
            }
        }
    }) 
}, 30) 

// Handle player controls
document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        player.moveLeft() 
    } else if (event.code === "ArrowRight") {
        player.moveRight() 
    } else if (event.code === "ArrowUp") {
        player.jump() 
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
