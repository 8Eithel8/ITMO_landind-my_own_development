export default class Team {
    constructor(data, cardSelector) {
        this.image = data.image;
        this.name = data.name;
        this.post = data.post;
        this.postRank = data.postRank;
        this.postDegree = data.postDegree;
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
        this._cardTitle = this._element.querySelector('.team__member-name');
        this._cardImage = this._element.querySelector('.team__image');
        this._cardMember = this._element.querySelector('.team__member-place');
        this._cardMemberRank = this._element.querySelector('.team__member-rank');
        this._cardMemberDegree = this._element.querySelector('.team__member-degree');


        // Добавляем данные
        this._cardTitle.textContent = this.name;
        this._cardImage.src = this.image;
        this._cardImage.alt = 'фотография ' + this.name;
        this._cardMember.textContent = this.post;
        this._cardMemberRank.textContent = this.postRank;
        this._cardMemberDegree.textContent = this.postDegree;

        // возвращаем элемент во внешнюю область
        return this._element;
    };
}