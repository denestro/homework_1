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

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabContentItemsParent = document.querySelector('.tab_content_items')

let currentIndex = 0

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })

    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'flex'
    tabContentItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {

        tabContentItems.forEach((item, index) => {

            if (event.target === item) {
                currentIndex = index

                hideTabContent()
                showTabContent(index)
            }
        })
    }
}




setInterval(() => {

    currentIndex++

    if (currentIndex >= tabContentBlocks.length) {
        currentIndex = 0
    }

    hideTabContent()
    showTabContent(currentIndex)

}, 5000)


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const euroInput = document.querySelector('#euro')

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {

        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {

            const data = JSON.parse(request.response)

            if (element.id === 'som') {
                targetElement1.value = (element.value / data.usd).toFixed(2)
                targetElement2.value = (element.value / data.euro).toFixed(2)
            }

            if (element.id === 'usd') {
                targetElement1.value = (element.value * data.usd).toFixed(2)
                targetElement2.value = ((element.value * data.usd) / data.eur).toFixed(2)
            }

            if (element.id === 'eur') {
                targetElement1.value = (element.value * data.euro).toFixed(2)
                targetElement2.value = ((element.value * data.euro) / data.usd).toFixed(2)
            }

            if (element.value === '') {
                targetElement1.value = ''
                targetElement2.value = ''
            }
        }
    }
}

converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let cardId = 1

const fetchCard = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json()

        card.innerHTML = `
            <p>${data.id}</p>
            <p>${data.title}</p>
            <p>${data.completed}</p>
        `
    } catch (error) {
        console.log(error)
    }
}


fetchCard(cardId)

btnNext.onclick = () => {
    cardId++

    if (cardId > 200) {
        cardId = 1
    }

    fetchCard(cardId)
}

btnPrev.onclick = () => {
    cardId--

    if (cardId < 1) {
        cardId = 200
    }

    fetchCard(cardId)
}



fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


