
import Publications from '../components/Publications.js';
// import './index.css';
import News from '../components/News.js';
import Section from "../components/Section.js";
import Team from "../components/Team.js";
import {setupListenersSocialPopup} from "../components/popupWithSocialButtons.js";
import {setupListenersPopup} from "../components/popupWithResearch.js";
import { initialNews, initialPub, initialTeam } from "../Utils/initialNews.js";
import {buttonEducationListeners} from "../components/education.js";

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

//создаем карточки команды

const cardTemplateTeam = '#team';
function createCardTeam(data) {

    const team = new Team(data, cardTemplateTeam);
    return team.generateCard();
}
function addCardTeam(data) {

    sectionTeam.addItem(createCardTeam(data));
};
const sectionTeam = new Section(
    {
        items: initialTeam,
        renderer: addCardTeam
    },
    '.team__swiper-wrapper'
);

sectionTeam.renderAll();



setupListenersPopup();
setupListenersSocialPopup();
buttonEducationListeners();