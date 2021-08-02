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

document.addEventListener('DOMContentLoaded', () => {

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
        // submitBtn = form.querySelector('button'),
        makeLike = form.querySelector('[type = "checkbox"]');

    form.addEventListener('submit', event => {
        event.preventDefault();
    
        if (input.value) {
            movieDB.movies.push(input.value);
    
            formListMovie(movieDB.movies, movieList);
        }
        
        if (makeLike.checked) {
            console.log('Добавляем любимый фильм');
        }

        event.target.reset();
    });
    
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = 'драма';
    
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function formListMovie(films, parent) {
        parent.innerHTML = '';
    
        sortArr(films);
    
        films.forEach((item, i) => {
            if (item.length > 21) {
                const newItem = item.slice(0, 21);
                item = `${newItem}...`;
            }

            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>
            `;
        });

        const deleteBtns = document.querySelectorAll('.delete');

        deleteBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);
                formListMovie(films, parent);
            });
        });
    }
    
    deleteAdv(adv);
    makeChanges();
    formListMovie(movieDB.movies, movieList);

});