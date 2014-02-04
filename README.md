# rg-html-base

## Используются:
* [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
* [gruntjs](https://github.com/gruntjs/grunt)
* [html5shiv](https://github.com/aFarkas/html5shiv)

## Зависимости:
* Node.js - необходимо установить
* grunt-cli - command line interface для grunt, необходимо установить командой: 
    $ npm install -g grunt-cli

## Инициализация:
* клонируем репозиторий
* переходим в директорию с проектом через консоль
* в консоли: 
    $ npm install
* в консоли: 
    $ grunt

## Описание:
За основу базового шаблона взят [html5-boilerplate](https://github.com/h5bp/html5-boilerplate). Из него убраны все избыточные сущности, в том числе [Modernizr](https://github.com/Modernizr/Modernizr). Для автоматизации процесса минификации подключены плагины grunt: [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin), [uglify](https://github.com/gruntjs/grunt-contrib-uglify), [imagemin](https://github.com/gruntjs/grunt-contrib-imagemin), [watch](https://github.com/gruntjs/grunt-contrib-watch). Все настройки данных плагинов доступны в файле Gruntfile.js. После запуска команды grunt в консоли все минификации происходят "на лету" в директорию dest.
