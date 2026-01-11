/* ========== Navigation =========== */

const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.nav-list .close')
hamburger.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.add('show')
})

close.addEventListener('click', () => {
    document.querySelector('.nav-list').classList.remove('show')
})