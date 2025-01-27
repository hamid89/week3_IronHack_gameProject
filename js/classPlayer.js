class Player {
    constructor() {
        // Define player's dimensions and movement properties
        this.width = 10; // Player width in vw
        this.height = 17; // Player height in vh
        this.stepSize = 25; // Movement step size in vw
        this.fixedPositions = [10, 35, 60, 80]; // Predefined X positions for the player
        this.currentStepIndex = 2; // Start at the middle position
        this.positionX = this.fixedPositions[this.currentStepIndex]; // Initial X position
        this.positionY = 5; // Initial Y position (ground level)
        this.isJumping = false; // Flag to prevent multiple jumps
        this.jumpHeight = 12; // Maximum jump height in vh
        this.playerElm = document.getElementById("player"); // DOM element representing the player
        this.updateUI(); // Initial UI update
    }

    // Update the player's position and size in the DOM
    updateUI() {
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
    }

    // Move the player left if possible
    moveLeft() {
        if (this.currentStepIndex > 0) {
            this.currentStepIndex--; // Move to the previous position
            this.positionX = this.fixedPositions[this.currentStepIndex];
            this.updateUI();
        }
    }

    // Move the player right if possible
    moveRight() {
        if (this.currentStepIndex < this.fixedPositions.length - 1) {
            this.currentStepIndex++; // Move to the next position
            this.positionX = this.fixedPositions[this.currentStepIndex];
            this.updateUI();
        }
    }

    // Make the player jump
    jump() {
        if (this.isJumping) return; // Prevent overlapping jumps

        this.isJumping = true; // Set jump flag
        const initialY = this.positionY; // Store the starting position

        // Handle the upward motion of the jump
        const jumpUpInterval = setInterval(() => {
            if (this.positionY >= initialY + this.jumpHeight) {
                clearInterval(jumpUpInterval); // Stop upward motion
                this.descend(initialY); // Start descending
            } else {
                this.positionY += 1; // Increment height
                this.updateUI();
            }
        }, 30); // Update interval for smooth animation
    }

    // Handle descending after the jump
    descend(initialY) {
        const jumpDownInterval = setInterval(() => {
            // Continue descending until reaching the ground
            if (this.positionY <= initialY) {
                clearInterval(jumpDownInterval); // Stop descending
                this.positionY = initialY; // Reset position to the ground
                this.isJumping = false; // Reset jump flag
                this.updateUI();
            } else {
                this.positionY -= 1; // Decrement height
                this.updateUI();
            }
        }, 30); // Update interval for smooth animation
    }
}