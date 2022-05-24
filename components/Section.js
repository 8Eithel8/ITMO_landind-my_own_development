/* класс `Section` отвечает за отрисовку элементов на странице. Этот класс:
- Первым параметром конструктора принимает объект с двумя свойствами: `items` и `renderer`. Свойство `items` — это массив данных, которые нужно добавить на страницу при инициализации класса. Свойство `renderer` — это функция, которая отвечает за создание и отрисовку данных на странице.
- Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
У класса `Section` нет своей разметки. Он получает разметку через функцию-колбэк и вставляет её в контейнер.*/

export default class Section  {
    constructor ({ items, renderer }, selector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    };

    //публичный метод отвечает за отрисовку всех элементов
    renderAll () {
        this._renderedItems.forEach(item => {
          //Отрисовка каждого отдельного элемента
            this._renderer(item);
        });
    };

    //убличный метод `addItem`, который принимает DOM-элемент и добавляет его в контейнер
    addItem (element) {
        this._container.append(element);
    };
};

