"use strict";
//----------------урок 19 практика  


const personalMovieDB = {
   count: 0,
   movies:{},
   actors:{},
   genres:[],
   privat: false,
   start: function(){
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){ //условие говоит- пока, personalMovieDB.count=пустой строке или null или не числу то
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); // то задавай этот вопрос столько раз сколько необходимо!
    }
   },
   rememberMyFilms: function(){
    for(let i= 0; i < 2; i++){
        const  a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = +prompt('На сколько оцените его?', '');
            if(a != null && b !=null && a != '' && b != '' && a.length < 50 ){
                personalMovieDB.movies[a] = b;
            }else{
                i--;
            }   
        }
    },
    detectPersonalLevel:function(){
    if(personalMovieDB.count < 10 ){
        console.log("Просмотрено не так уж много");
    } else if( personalMovieDB.count <= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель!')
    }else if(personalMovieDB.count <= 30){
        console.log('Вы киноман')
    }else{
        console.log('Произошла ошибка')
    }
},
    showMyDB:function (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
},
    toggleVisidleMyDB:function(){
        if(personalMovieDB){
            personalMovieDB.privat = false;
            
        }else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres:function(){
    for(let i = 1; i <= 2; i++){
        // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // if(genre === '' || genre == null){
        //     i--;
        // }else{
        //     personalMovieDB.genres[i-1] = genre;
        // }
        //2 вариант реализации через мeтоды массивов
        let genre = prompt(`Введите любимые жанры через запятую`).toLowerCase();
        if(genre === '' || genre == null){
            i--;
        }else{
            personalMovieDB.genres = genre.split(", ");
            personalMovieDB.genre.sort();
        }
    }
    personalMovieDB.genres.forEach((item,i)=>{
        console.log(`Любимый жанр ${i+1} это ${item}`)

    });
}

};



