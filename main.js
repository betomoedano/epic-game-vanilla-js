import { Player } from "./player.js";
import { Ball } from "./ball.js";

const score = document.getElementById("score");
let points = 0;

const canvas = document.getElementById('myCanvas');
canvas.height=600;

const ctx = canvas.getContext('2d');
const ball = new Ball(700, 100, 3, 3, 15, 'lightpink');
const player = new Player(400, 550, 200, 15, 'lightgray');


// function to generate ramdom color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        // console.log(color);
    }
    return color;
}

animate();
function animate() {
    player.update();
    
    // Clear the canvas
    canvas.width = 800;
    ball.draw(ctx);
    player.draw(ctx);
    
    // detect collision
    if (ball.x + ball.vx > player.x - player.width / 2 &&
        ball.x + ball.vx < player.x + player.width / 2 &&
        ball.y + ball.vy > player.y - player.height / 2 &&
        ball.y + ball.vy < player.y + player.height / 2) {
        ball.vy = -ball.vy;
        points++;
        score.innerHTML = points;
        ball.color = getRandomColor();
        player.color = getRandomColor();
        canvas.style.border = `5px solid ${getRandomColor()}`;
    }

    // detect game over 
    if (ball.y + ball.vy > canvas.height - 10) {
        alert('Game Over You scored ' + points + ' points')
        // restart game
        points = 0;
        score.innerHTML = points;
        ball.x = 700;
        ball.y = 100;
        ball.vx = 3;
        ball.vy = 3;
        ball.color = 'lightpink';
        player.color = 'lightgray';
        player.x = 400;
        player.y = 550;
        canvas.style.border = `5px solid ${getRandomColor()}`;
    }


    // requestAnimationFrame calls animate() again and again it 
    // gives the illusion of movement
    requestAnimationFrame(animate);
}