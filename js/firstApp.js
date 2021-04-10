/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

personalMovieDB.start = function () {
    let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    personalMovieDB.count = numberOfFilms;
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        personalMovieDB.count = numberOfFilms;
    }
};

personalMovieDB.detectPersonalLevel = function (){
    if(personalMovieDB.count<10){
        console.log("Просмотрено довольно мало фильмов");
    }else if(10<= personalMovieDB.count && personalMovieDB.count<=30){
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count>30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
};

personalMovieDB.rememberMyFilms = function (){
    for ( let i = 0; i<2; i++){
        let a = prompt('Один из последних просмотренных фильмов?',""),
            b = prompt('На сколько оцените его?',"");
            
        if (a=="" || a==null|| a.length>50){
            i--;
        }else if(b=="" || b==null|| b.length>50){
            i--;
        }else{
            personalMovieDB.movies[a]=b;
        }
    }
};
personalMovieDB.toggleVisibleMyDB = function (){
    if (personalMovieDB.privat==false){
        personalMovieDB.privat=true;
    } else{
        personalMovieDB.privat = false;
    }
};

personalMovieDB.showMyDB = function () {
    if (personalMovieDB.privat==false){
        console.log(personalMovieDB);
    }
};

personalMovieDB.writeYourGenres = function (){
    let favoriteGenre;
    for (let i=1;i<4;i++){
        favoriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1]=favoriteGenre;
        if (favoriteGenre == '' || favoriteGenre == null) {
            i--;
        }
    }
    personalMovieDB.genres.forEach(function(item, i){
        console.log(`Любимый жанр ${i+1} - это ${item}`);
    });
    
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();