export default class Publications {
    constructor(data, cardSelector) {
        this.title = data.name;
        this.text = data.text;
        this.image = data.image;
        this.authors = data.authors;
        this._cardSelector = cardSelector; //  записали селектор в приватное поле
    };

    _getTemplate() {
        // получаем разметку из HTML, клонируем элемент
        // и возвращаем DOM-элемент карточки
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.publications__swiper-slide')
            .cloneNode(true);
    };

    generateCard() {
        // сохраняем разметку в приватное поле _element
        this._element = this._getTemplate();
        this._cardTitle = this._element.querySelector('.cards__title');
        this._cardText = this._element.querySelector('.cards__text');
        this._image = this._element.querySelector('.cards__image');
        this._cardAuthors = this._element.querySelector('.cards__authors');


        // Добавляем данные
        this._cardTitle.textContent = this.title;
        this._cardText.textContent = this.text;
        this._image.src = this.image;
        this._cardAuthors.textContent = this.authors;

        // возвращаем элемент во внешнюю область
        return this._element;
    };
}