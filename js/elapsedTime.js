const elapsedTime = localStorage.getItem('elapsedTime') || '00:00'
document.getElementById('message').textContent = `Mario Lasted: ${elapsedTime}`
document.getElementById('play-again').addEventListener('click', () => {
    window.location.href = '../html/index.html'; // Redirect to the main game page
})

document.getElementById('home').addEventListener('click', () => {
    window.location.href = '../html/start.html'; // Redirects to the game page
})
