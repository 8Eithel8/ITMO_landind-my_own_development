
import Publications from '../components/Publications.js';
// import './index.css';
import News from '../components/News.js';
import Section from "../components/Section.js";
import { initialNews, initialPub } from "../Utils/initialNews.js";

const cardTemplate = '#news-template';

function createCard(data) {
    const news = new News(data, cardTemplate);
    return news.generateCard();
}

function addCard(data) {
    sectionNews.addItem(createCard(data));
};

const sectionNews = new Section(
    {
        items: initialNews,
        renderer: addCard
    },
    '.news__swiper-wrapper'
);


sectionNews.renderAll();


//создаем карточки публикаций
const cardTemplatePub = '#publications';

function createCardPub(data) {
    const publications = new Publications(data, cardTemplatePub);
    return publications.generateCard();
}

function addCardPub(data) {
    sectionPub.addItem(createCardPub(data));
};

const sectionPub = new Section(
    {
        items: initialPub,
        renderer: addCardPub
    },
    '.publications__swiper-wrapper'
);


sectionPub.renderAll();