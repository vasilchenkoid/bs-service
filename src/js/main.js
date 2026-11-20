const linkOpenServices = document.getElementById('open-services')
const linkCloseServices = document.getElementById('close-services')

const linkOpenCases = document.getElementById('open-cases')
const linkCloseCases = document.getElementById('close-cases')

const cardMain = document.querySelector('.card_main')
const cardCases = document.querySelector('.card_cases')

linkOpenServices.addEventListener('click', () => {
    if (!cardMain.classList.contains('card_main__expanded'))
        cardMain.classList.add('card_main__expanded')
})

linkCloseServices.addEventListener('click', () => {
    if (cardMain.classList.contains('card_main__expanded'))
        cardMain.classList.remove('card_main__expanded')
})

linkOpenCases.addEventListener('click', () => {
    if (!cardCases.classList.contains('card_cases__expanded'))
        cardCases.classList.add('card_cases__expanded')
})

linkCloseCases.addEventListener('click', () => {
    if (cardCases.classList.contains('card_cases__expanded'))
        cardCases.classList.remove('card_cases__expanded')
})
