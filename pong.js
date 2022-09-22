import Ball  from './Ball.js';
import Paddle from './Paddle.js';

const ball = new Ball(document.getElementById("ball"));
const player = new Paddle(document.getElementById("player-paddle"));
const computer = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("COM-score");

let lastTime;
function Update(time)
{
    if (lastTime != null)
    {
        const delta = time - lastTime;
        //  Update Code
        ball.Update(delta, [player.rect(), computer.rect()]);
        computer.Update(delta, ball.y);
        //Changes the Hue
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

        document.documentElement.style.setProperty("--hue", hue + delta * .01) 

        if(isBad()) cope()
    }
    
    lastTime = time
    window.requestAnimationFrame(Update);
}

function isBad()
{
    const rect = ball.rect();
    
    return rect.right >= window.innerWidth || rect.left <= 0
}

function cope()
{
    const rect = ball.rect();
    if (rect.right >= window.innerWidth)
    {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1

    }
    else
    {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }
    ball.reset();
    computer.reset();
    player.reset();
}

document.addEventListener("mousemove", e => {
    player.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(Update);