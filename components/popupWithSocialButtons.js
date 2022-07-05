const popupSocial = document.querySelector('.popup_social-block');
const popupContainer = document.querySelector('.popup__container');
const buttonsIconSocial =  popupSocial.querySelectorAll('.popup__social-icon');

function getXY(button) {
    const buttonXY = button.getBoundingClientRect();
    const windowWidth = document.documentElement.clientWidth;
    let newX = buttonXY.left;
    let newY = buttonXY.top;
    if (newX > (windowWidth * 0.82)) {
        popupContainer.style.top = (newY - 80) + "px";
        popupContainer.style.left = (newX - 140) + "px";
    }  else {
        popupContainer.style.top = (newY - 80) + "px";
        popupContainer.style.left = (newX - 80) + "px";
    };
};

/*открываем попап c соцсетями*/
function openPopup(button) {
    getXY(button);
    popupSocial.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
    document.addEventListener('scroll', closePopupByScroll);
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
    document.removeEventListener('scroll', closePopupByScroll);
};

function closePopupByScroll () {
    closePopup(popupSocial)
};

function setupListenersSocialPopup() {
    const buttonsSocialShare = document.querySelectorAll('.cards__link-social');
    popupSocial.addEventListener('click', closeOverlay);
    buttonsSocialShare.forEach(button => button.addEventListener('click', () => openPopup(button)));
    buttonsIconSocial.forEach(button => button.addEventListener('click', () => closePopup(popupSocial)));
}

export {setupListenersSocialPopup};

