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

const tabBloks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

let currentIndex = 0
let sliderInterval

const selectTab = (index) => {
    tabBloks.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none'
    })

    tabs.forEach((item, i) => {
        item.classList.remove('tab_content_item_active')
    })

    tabs[index].classList.add('tab_content_item_active')

    currentIndex = index
}

const startSlider = () => {
    sliderInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabs.length
        selectTab(currentIndex)
    }, 5000)
}

const resetSlider = () => {
    clearInterval(sliderInterval)
    startSlider()
}

tabsParent.onclick = (event) => {
    const tab = event.target.closest('.tab_content_item')
    if (!tab) return

    const index = [...tabs].indexOf(tab)

    selectTab(index)
    resetSlider()
}

selectTab(0)
startSlider()
// const hideBlocks = () => {
//     tabBloks.forEach((item) => {
//         item.style.display = 'none'
//     })
//     tabs.forEach((item) => {
//         item.classList.remove('tab_content_item_active')
//     })
// }

// const showBlock = (index = 0) => {
//     tabBloks[index].style.display = 'block';
//     tabs[index].classList.add('tab_content_item_active');
// }
// hideBlocks();
// showBlock();

// tabsParent.onclick = (event) => {
//     if(event.target.tagName.toLowerCase() === 'button'){
//         tabs.forEach((item,index) => {
//             if(event.target === item){
//                 hideBlocks();
//                 showBlock(index)
//             }
//         })
//     }
// }