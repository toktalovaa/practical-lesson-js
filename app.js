"use strict";
//----------------урок 19 практика  

let numberOfFilms;
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){ //условие говоит- пока, numberOfFilms=пустой строке или null или не числу то
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // то задавай этот вопрос столько раз сколько необходимо!
    }
}
start();

const personalMovieDB = {
   count: numberOfFilms,
   movies:{},
   actors:{},
   genres:[],
   privat: false
}


function rememberMyFilms(){
    for(let i= 0; i < 2; i++){
        const  a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = +prompt('На сколько оцените его?', '');
            if(a != null && b !=null && a != '' && b != '' && a.length < 50 ){
                personalMovieDB.movies[a] = b;
            }else{
                i--;
            }   
    }

}
rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10 ){
        console.log("Просмотрено не так уж много");
    } else if( personalMovieDB.count <= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель!')
    }else if(personalMovieDB.count <= 30){
        console.log('Вы киноман')
    }else{
        console.log('Произошла ошибка')
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();


 