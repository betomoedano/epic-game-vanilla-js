import { Controls } from './controls.js';

class Player {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.controls = new Controls();
    }

    update() {
        if (this.controls.left) {
            this.x -= 5;
        }
        if (this.controls.right) {
            this.x += 5;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2, 
            this.y - this.height / 2, 
            this.width, this.height
        );
        ctx.fillStyle = this.color;
        ctx.fill();
    }

}

export { Player };