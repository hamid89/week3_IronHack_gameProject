class Obstacle {
    constructor() {
        // Define obstacle dimensions and initial position
        this.width = 10; // Obstacle width in vw
        this.height = 13; // Obstacle height in vh
        this.positionX = this.getFixedPosition(); // Randomized X position
        this.positionY = 100; // Start at the top of the screen

        this.createDomElement(); // Create and display the DOM element
    }

    // Generate a random fixed X position
    getFixedPosition() {
        const positions = [10, 35, 60, 80]; // Predefined X positions
        return positions[Math.floor(Math.random() * positions.length)];
    }

    // Create the DOM element for the obstacle
    createDomElement() {
        this.obstacleElm = document.createElement("div");
        this.obstacleElm.className = "obstacle";
        this.obstacleElm.style.width = this.width + "vw";
        this.obstacleElm.style.height = this.height + "vh";
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }

    // Move the obstacle downward
    moveDown() {
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + "vh";
    }
}