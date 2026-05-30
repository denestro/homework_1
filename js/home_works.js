//gmail
const gmailInput = document.querySelector('#gmail_input')
const gmailBtn = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

gmailBtn.onclick = () => {
    if(regex.test(gmailInput.value)){
        gmailResult.style.color = 'green'
        gmailResult.innerHTML = 'Мы украли ваши данные'
    }else{
        gmailResult.style.color = 'red';
        gmailResult.textContent = 'Напиши нормально чтобы мы украли данные'
    }
}
//square
const child = document.querySelector('.child_block')
const parent = document.querySelector('.parent_block')

const offsetWidth = parent.clientWidth - child.offsetWidth;
const offsetHeight = parent.clientHeight - child.offsetHeight;



let moveRight = 0;
let moveDown = 0;

const move = () => {
    if(moveRight < offsetWidth && moveDown === 0){
        moveRight += 2;
        child.style.left = moveRight + 'px';
        requestAnimationFrame(move);
    } else if(moveRight >= offsetWidth && moveDown < offsetHeight){
        moveDown += 2
        child.style.top = moveDown + 'px'
        requestAnimationFrame(move)
    } else if(moveDown >= offsetHeight && moveRight > 0){
        moveRight -= 2;
        child.style.left = moveRight + 'px'
        requestAnimationFrame(move)
    }else if(moveRight <= 0 && moveDown > 0){
        moveDown -= 2;
        child.style.top = moveDown + 'px';
        requestAnimationFrame(move);
    }
}
move()

//timer
const intervalEl = document.querySelector('.interval');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let seconds = 0;
let intervalId = null;

start.addEventListener('click', () => {
  intervalId = setInterval(() => {
    seconds++;
    intervalEl.textContent = seconds;
  }, 1000);

  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

stop.addEventListener('click', () => {
  clearInterval(intervalId);
  start.disabled = false;
  stop.disabled = true;
});

reset.addEventListener('click', () => {
  clearInterval(intervalId);
  seconds = 0;
  intervalEl.textContent = 0;

  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
});