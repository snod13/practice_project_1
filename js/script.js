/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    genre = promoBg.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    form = document.querySelector('.add'),
    input = form.querySelector('.adding__input'),
    submitBtn = form.querySelector('button');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';



function formListMovie() {
    movieList.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((item, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
        </li>
    `;
    });
}

formListMovie();

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    if (input.value != '') {
        movieDB.movies.push(input.value);
        formListMovie();
        input.value = ''; 
    }
});