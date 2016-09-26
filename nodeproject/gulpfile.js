var gulp = require("gulp");//creates a reference to gulp
var jshint = require("gulp-jshint");
var nodemon = require("gulp-nodemon");

//take all js Files in our project route and all js files in the src diretory
var jsFiles = ['*.js', 'src/**/*.js'];
gulp.task("style", function(){
    //check the cleaniless of js files
    return gulp.src(jsFiles).pipe(jshint());
});

//define the tasks of linking all the external library references in our index.html
gulp.task('inject', function(){
    //wiredep looks at the bower.json file and reads the dependencies
   var wiredep = require("wiredep").stream;
   //create a ref to gulp inject
   var inject = require("gulp-inject");
   //define the inject SRC "where are the CSS and JS files? "
   var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js']);
   //injectOptions
   var injectOptions = {
       ignorePath: '/public'
   }
   
   //wiredep options
   var options = {
       //where is the bower file?
       bowerJson: require('./bower.json'),
       //where are our dependencies in the hierarhcy?
       directory: './bower_components',
       //tells the wiredep to neglect the directory ../../bower_components in the index.html injection
       ignorePath: '../../bower_components'
   };
   
   //defining the gulp pipeline
   return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        //injectSrc "where to finde the files"; 
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views/'));
});

//the array takes all other tasks that we want to run when we run the serve task
gulp.task('nodemon', ['style', 'inject'], function(){
    var options = {
        script: 'app.js',
        delayTime: 1, 
        //Tell nodemon "watch for any changes in js files. if any one changes, restart the server"
        watch: jsFiles
    }
    
    return nodemon(options)//use EventListener "on"
        .on('restart', function(ev){
            console.log("Restarting server...");
        });
});