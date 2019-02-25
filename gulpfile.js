//deps
const 
{src, dest, series,watch} = require('gulp')
,clean = require('gulp-clean')
,autoprefixer = require('gulp-autoprefixer')
,cssMin = require('gulp-cssmin')
,sass = require('gulp-sass')
,uglify = require('gulp-uglify-es').default
,browserSync = require('browser-sync').create()
,webpack = require('webpack')
,webpackStream = require('webpack-stream');

//vars
const 
distDir = './dist'
,distCssDir = `${distDir}/css`
,distJsDir = `${distDir}/js`
,sourceDir = './source'
,sourceCssDir = `${sourceDir}/css`
,sourceCssStylesDir = `${sourceCssDir}/styles`
,sourceSassDir = `${sourceDir}/sass`
,sourceJsDir = `${sourceDir}/js`
,sourceSassPagesDir = `${sourceSassDir}/pages`
,sourceSassMainFile = `${sourceSassDir}`
,sassMainFile = `${sourceSassDir}/main.scss`
// ,sassDefaultFile = `${sourceSassDir}/default.scss`
// ,sassAdminFile = `${sourceSassDir}/admin.scss`
,viewsSourceFiles = `${sourceDir}/**/*.html`
,fontsDir = `${sourceDir}/fonts/**/*`
,imgsDir = `${sourceDir}/img/**/*`;

//functions
function CleanDist(){
    return src(distDir).pipe(clean({read:false}));
}
function HTML(){
    return new Promise((resolve,reject)=>{
        src(`${sourceDir}/**/*.html`)
        .pipe(dest(distDir))
        .on('error', reject)
        .on('end', resolve)
    })
}
function BuildCSS(){
    return new Promise((resolve,reject)=>{
        src(`${sourceCssDir}/**/*.css`)
        // .pipe(autoprefixer()) // broken :/
        .pipe(cssMin())
        .pipe(dest(distCssDir))
        .on('error', reject)
        .on('end', resolve)
    })
}
function Sass(){
    return new Promise((resolve,reject)=>{
        src([
            `${sourceSassPagesDir}/**/*.scss`
            ,sassMainFile
            // ,sassAdminFile
            // ,sassDefaultFile
        ])
        .pipe(sass({sourceComments:false}).on('error', sass.logError))
        .pipe(dest(sourceCssStylesDir))
        .on('error', reject)
        .on('end', resolve)
    })
}
function CleanSass(){
    return src(sourceCssStylesDir).pipe(clean());
}
function WebPack(){
    return new Promise((resolve,reject)=>{
        src(`${sourceJsDir}/**/*.js`)
        .pipe(webpackStream({
            config:require('./webpack.config.js')
        }))
        .pipe(uglify())
        .pipe(dest(distJsDir))
        .on('error', reject)
        .on('end', resolve)
    })
}
function Fonts(){
    return new Promise((resolve,reject)=>{
        src(fontsDir)
        .pipe(dest(`${distDir}/fonts`))
        .on('error', reject)
        .on('end', resolve)
    })
}
function Imgs(){
    return new Promise((resolve,reject)=>{
        src(imgsDir)
        .pipe(dest(`${distDir}/img`))
        .on('error',reject)
        .on('end',resolve)
    })
}
//watchers
const watchers = {
    js:{
        dir:`${sourceJsDir}/**/*.js`,
        fn: WebPack
    },
    sass: {
        dir: `${sourceSassDir}/**/*.scss`,
        fn: Sass
    },
    css:{
        dir: `${sourceCssDir}/styles/**/*.css`,
        fn: BuildCSS
    },
    html:{
        dir: viewsSourceFiles,
        fn: HTML
    }
}

//tasks
exports.cleanDist = CleanDist;
exports.fonts = Fonts;
exports.webpack = WebPack;
exports.imgs = Imgs;
exports.css = series(CleanSass, Sass, BuildCSS);
exports.sass = series(CleanSass, Sass);
exports.default = series(CleanDist, CleanSass, Fonts, Imgs, Sass, BuildCSS, WebPack, HTML);
exports.dev = ()=>{
    browserSync.init({
        server:{
            baseDir: distDir
        }
    });

    for( let watcher in watchers ){
        let wAtual = watchers[watcher];
        watch(wAtual.dir).on('change',()=>{
            if(wAtual.fn) wAtual.fn().then(done => browserSync.reload());
            else browserSync.reload();
        })
    }
}

