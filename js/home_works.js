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


const childBlock = document.querySelector('.child_block')

let position = 0;

const move = () => {
    position += 0.9;

    childBlock.style.left = position + 'px';

    if(position < 450){
        requestAnimationFrame(move);
    }
}

move()