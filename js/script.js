const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
let count=0;
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },1000)
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    
    count += 0.1;
    console.log(count);
    score.innerHTML = count.toFixed(0);


    if(gameOver(pipePosition, marioPosition)) {
       clearInterval(loop);
    }
},10);

const gameOver = (posPipe, posMario) => {
    if(posPipe <= 120 && posPipe > 0 && posMario < 70) {
        pipe.style.animation = 'none';
        pipe.style.left = `${posPipe}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${posMario}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '50px';
        return true;
    }    
}

document.addEventListener('keydown', jump);