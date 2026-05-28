const phoneInput = document.querySelector('#phone_input')
const phoneBtn = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regex = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

phoneBtn.onclick = () => {
    if(regex.test(phoneInput.value)){
        phoneResult.style.color = 'green'
        phoneResult.innerHTML = 'VALID PHONE'
    }else{
        phoneResult.style.color = 'red';
        phoneResult.textContent = 'NOT VALID PHONE'
    }
}