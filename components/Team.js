export default class Team {
    constructor(data, cardSelector) {
        this.image = data.image;
        this.name = data.name;
        this.post = data.post;
        this._cardSelector = cardSelector; //  записали селектор в приватное поле
    };

    _getTemplate() {
        // получаем разметку из HTML, клонируем элемент
        // и возвращаем DOM-элемент карточки
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.swiper-slide')
            .cloneNode(true);
    };

    generateCard() {
        // сохраняем разметку в приватное поле _element
        this._element = this._getTemplate();
        this._cardTitle = this._element.querySelector('.cards__title');
        this._cardImage = this._element.querySelector('.cards__image');
        this._cardAuthors = this._element.querySelector('.cards__authors');


        // Добавляем данные
        this._cardTitle.textContent = this.name;
        this._cardImage.src = this.image;
        this._cardImage.alt = 'фотография ' + this.name;
        this._cardAuthors.textContent = this.post;

        // возвращаем элемент во внешнюю область
        return this._element;
    };
}