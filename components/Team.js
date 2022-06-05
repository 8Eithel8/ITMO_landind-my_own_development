export default class Team {
    constructor(data, cardSelector) {
        this.image = data.image;
        this.title = data.title;
        this.author = data.employee;
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
        this._cardTitle.textContent = this.title;
        this._cardImage.src = this.image;
        this._cardAuthors.textContent = this.author;

        // возвращаем элемент во внешнюю область
        return this._element;
    };
}