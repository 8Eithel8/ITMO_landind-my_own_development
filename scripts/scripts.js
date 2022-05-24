//все это надо импортнуть в index.js buttonSocialShare  не существует пока мы не отрисуем карточку.
const popupSocial = document.querySelector('.popup_social-block');
const buttonSocialShare = document.querySelector('.cards__link-social');
const buttonsSocialShare = document.querySelectorAll('.cards__link-social');
const popupContainer = document.querySelector('.popup__container');
const buttonsIconSocial =  popupSocial.querySelectorAll('.popup__social-icon');

console.log(buttonSocialShare);

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
};

const buttonXY = buttonSocialShare.getBoundingClientRect();
console.log(buttonXY);


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
};

popupSocial.addEventListener('click', closeOverlay);
document.addEventListener('keydown', closePopupByEsc);
buttonsSocialShare.forEach(button => button.addEventListener('click', () => openPopup(button)));
buttonsIconSocial.forEach(button => button.addEventListener('click', () => closePopup(popupSocial)));
document.addEventListener('scroll', () => closePopup(popupSocial));

