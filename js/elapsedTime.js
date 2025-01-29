

const deathMusic = new Audio ("../audios/death_sound.flac")
deathMusic.loop = false
deathMusic.muted = false
deathMusic.volume = 0.5
deathMusic.play()

const gameOverMusic = new Audio("../audios/game_over.wav")
gameOverMusic.loop = false
gameOverMusic.muted = false
gameOverMusic.volume = 0.5
gameOverMusic.play()


document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('keydown', () => {
        // Play death music when a key is pressed
        deathMusic.play().catch((error) => {
            console.log("Error playing death music:", error)  
        })  

        
        setTimeout(() => {
            gameOverMusic.play().catch((error) => {
                console.log("Error playing game over music:", error)  
            })  
        }, 7000)   
    })  
})  

const elapsedTime = localStorage.getItem('elapsedTime') || '00:00'
document.getElementById('message').textContent = `Mario Lasted: ${elapsedTime}`
document.getElementById('play-again').addEventListener('click', () => {
    window.location.href = '../game.html'
})

document.getElementById('home').addEventListener('click', () => {
    window.location.href = '../index.html'   
})
