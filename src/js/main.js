const linkOpenServices = document.getElementById('open-services')
const linkCloseServices = document.getElementById('close-services')

const linkOpenCases = document.getElementById('open-cases')
const linkCloseCases = document.getElementById('close-cases')

const page = document.querySelector('.page')

linkOpenServices.addEventListener('click', () => {
    if (!page.classList.contains('page_state_services'))
        page.classList.add('page_state_services')
})

linkCloseServices.addEventListener('click', () => {
    if (page.classList.contains('page_state_services'))
        page.classList.remove('page_state_services')
})

linkOpenCases.addEventListener('click', () => {
    if (!page.classList.contains('page_state_portfolio'))
        page.classList.add('page_state_portfolio')
})

linkCloseCases.addEventListener('click', () => {
    if (page.classList.contains('page_state_portfolio'))
        page.classList.remove('page_state_portfolio')
})
