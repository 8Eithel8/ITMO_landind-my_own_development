const popupResearch = document.querySelector('.popup_research');
const buttonsOpenPopup = document.querySelectorAll('.cards__button-details');
const buttonOpenPopup = document.querySelector('.cards__button-details');
const buttonClosePopup =  popupResearch.querySelector('.popup__button_close');
const buttonsClosePopup =  popupResearch.querySelectorAll('.popup__button_close');

/*открываем попап*/
function openPopup() {
    console.log('хрен');
    popupResearch.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
    buttonClosePopup.addEventListener('click', closePopup);
};

/*закрываем попап по клавише*/
function closePopupByEsc(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    };
};

/*закрываем попап по клику на оверлей*/
function closeOverlay(evt) {
    if (evt.currentTarget === evt.target) {
        closePopup(evt.target);
    };
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEsc);
    buttonOpenPopup.removeEventListener('click', closePopup);

};

function setupListenersPopup() {
    const buttonOpenPopup = document.querySelector('.cards__button-details');
    popupResearch.addEventListener('click', closeOverlay);
    buttonsOpenPopup.forEach(button => button.addEventListener('click', () => openPopup(buttonOpenPopup)));
    buttonsClosePopup.forEach(button => button.addEventListener('click', () => closePopup(popupResearch)));
}

export {setupListenersPopup};
