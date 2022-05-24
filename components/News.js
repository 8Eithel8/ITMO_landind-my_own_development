export default class News {
    constructor(data, cardSelector) {
        this.date = data.date;
        this.title = data.name;
        this.text = data.text;
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
        this._cardDate = this._element.querySelector('.cards__date');
        this._cardTitle = this._element.querySelector('.cards__title');
        this._cardText = this._element.querySelector('.cards__text');


        // Добавляем данные
        this._cardDate.textContent = this.date;
        this._cardTitle.textContent = this.title;
        this._cardText.textContent = this.text;

        // возвращаем элемент во внешнюю область
        return this._element;
    };
}
