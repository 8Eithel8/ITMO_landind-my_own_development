
const educationBlock = document.querySelector('.education');
const buttonGraduate = educationBlock.querySelector('.education__button_graduate');
const blockGraduate = educationBlock.querySelector('.education__block_graduate');
const buttonMagistracy = educationBlock.querySelector('.education__button_magistracy');
const blockMagistracy = educationBlock.querySelector('.education__block_magistracy');
const buttonsHandleEducation = educationBlock.querySelectorAll('.education__button')

function handleChangeVisibly() {
    if(!buttonGraduate.classList.contains('education__button_hidden')) {
        blockGraduate.classList.add('hidden')
        buttonGraduate.classList.add('education__button_hidden')
        blockMagistracy.classList.remove('hidden')
        buttonMagistracy.classList.remove('education__button_hidden')
    } else {
        blockGraduate.classList.remove('hidden')
        buttonGraduate.classList.remove('education__button_hidden')
        blockMagistracy.classList.add('hidden')
        buttonMagistracy.classList.add('education__button_hidden')
    }
}

export const buttonEducationListeners = () =>
    buttonsHandleEducation.forEach(button => button.addEventListener('click', () => handleChangeVisibly()));