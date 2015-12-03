npm -v
npm install -g bower

bower init
bower list --path

bower i -S angular angular-route angular-resource angular-sanitize angular-animate angular-cookies angular-touch angular-loader angular-i18n
bower i -S bootstrap bootstrap-material-design

bower install jquery --save-dev
bower i jquery -S
bower i normalize.css -S
bower i modernizr.css -S

bower install zepto -D
bower uninstall zepto -D

bower i -S jquery

npm i gulp gulp-google-cdn -D
npm init
npm install gulp
npm install --save-dev gulp
npm install --save-dev gulp-concat-css
npm install --save-dev gulp-rename
npm install --save-dev gulp-jshint
npm install --save-dev gulp-sourcemaps
npm install --save-dev gulp-autoprefixer
npm install --save-dev gulp-livereload
npm install --save-dev gulp-connect
npm install --save-dev gulp-local-screenshots
npm install --save-dev gulp-template
npm install --save-dev gulp-sass
npm install --save-dev gulp-minify-css
npm install --save-dev gulp-uglify
npm install --save-dev imagemin-pngquant
npm install --save-dev gulp-imagemin
npm install --save-dev gulp-notify
npm install --save-dev rimraf
npm install --save-dev gulp-imagemin
npm install --save-dev gulp-changed
npm install --save-dev gulp-util
npm install --save-dev gulp-ftp
npm install --save-dev gulp-webserver
npm install --save-dev gulp-concat
npm install --save-dev gulp-image-resize
npm install --save-dev jaguarjs-jsdoc
npm install --save-dev jsdoc
npm install --save-dev gulp-jsdoc
npm install --save-dev gulp-docco
npm install --save-dev opn
npm install --save-dev gulp-open
npm install --save-dev gulp-connect
npm install gulp-sass --save-dev

npm install --save

npm install --save-dev gulp-autoprefixer gulp-concat gulp-concat-css gulp-minify-css gulp-rename gulp-sass gulp-util gulp-webserver
npm install --save-dev gulp-imagemin imagemin-pngquant gulp-notify rimraf gulp-changed gulp-util gulp-ftp gulp-image-resize





Решение ошибки "CRLF would be replaced by LF in ..."
git config --global --unset core.autocrlf
git config core.autocrlf false