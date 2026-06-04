const btnOpen = document.querySelector('#btn-get');
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal_close')

const showModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = '';
}

modal.onclick = (event) => {
    if(event.target == modal)
        closeModal();
}

btnClose.onclick = closeModal
btnOpen.onclick = showModal

let timeModal = setInterval(function() {
    showModal()
}, 10000);


const onScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;

    if (scrollTop + windowHeight >= fullHeight) {
        showModal();
        window.removeEventListener("scroll", onScroll);
    }
}

window.addEventListener("scroll", onScroll);