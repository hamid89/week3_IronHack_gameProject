const elapsedTime = localStorage.getItem('elapsedTime') || '00:00'
document.getElementById('timer-over').textContent = `Time: ${elapsedTime}`