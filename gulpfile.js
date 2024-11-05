
// Funciones gulp

// src nos ayuda a localizar documentos, dest a guardarlos y watch para cambios

import {src,dest,watch,series} from 'gulp' 



// Importacion

import * as dartSass from 'sass' // Esto importa todo de sass

import gulpSass from 'gulp-sass' // Solo nos trae la herramienta gulpSass

const sass = gulpSass(dartSass) // Constante sass para usar gulp-sass


// Funciones

export function js(done){

    src('src/js/app.js')
    .pipe(dest('build/js'))


    done()


}


export function css(done){

    src('src/scss/app.scss', {sourcemaps:true}) // Localizando documentos

    .pipe(sass().on('error',sass.logError)) // Los pipe llaman funcion y una ves finaliza ejecutan el siguiente pero si hay error nos avisa
    .pipe(dest('build/css', {sourcemaps: true}))

    done()


}

export function dev(){

    watch('src/scss/**/*.scss',css)
    watch('src/js/**/*.js',js)
      

}

export default series(js, css, dev) 

