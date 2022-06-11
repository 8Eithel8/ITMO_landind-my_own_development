//все это надо импортнуть в index.js buttonSocialShare  не существует пока мы не отрисуем карточку.

const popupSocial = document.querySelector('.popup_social-block');
// const buttonSocialShare = document.querySelector('.cards__link-social');
// const buttonsSocialShare = document.querySelectorAll('.cards__link-social');
const popupContainer = document.querySelector('.popup__container');
const buttonsIconSocial =  popupSocial.querySelectorAll('.popup__social-icon');

function getXY(button) {
    const buttonXY = button.getBoundingClientRect();
    const windowWidth = document.documentElement.clientWidth;
    let newX = buttonXY.left;
    console.log(newX);
    let newY = buttonXY.top;
    if (newX > (windowWidth * 0.82)) {
        popupContainer.style.top = (newY - 80) + "px";
        popupContainer.style.left = (newX - 140) + "px";
    }  else {
        popupContainer.style.top = (newY - 80) + "px";
        popupContainer.style.left = (newX - 80) + "px";
    };
};

/*открываем попап*/
function openPopup(button) {
    getXY(button);
    popupSocial.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByEsc);
    document.addEventListener('scroll', closePopupByScroll);
};

//const buttonXY = buttonSocialShare.getBoundingClientRect();
//TODO найти класс для ховера карточки и доавить его в openpopup? при закрытии удалять

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
    popupSocial.addEventListener('click', closeOverlay);
    const buttonsSocialShare = document.querySelectorAll('.cards__link-social');
    // console.log(buttonsSocialShare);
    buttonsSocialShare.forEach(button => button.addEventListener('click', () => openPopup(button)));
    buttonsIconSocial.forEach(button => button.addEventListener('click', () => closePopup(popupSocial)));
}

export {setupListenersSocialPopup};

