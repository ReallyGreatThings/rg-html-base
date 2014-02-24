# rg-html-base

## Используются:
* [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
* [gruntjs](https://github.com/gruntjs/grunt)
* [html5shiv](https://github.com/aFarkas/html5shiv)

## Зависимости:
* Node.js - необходимо установить
* grunt-cli - command line interface для grunt, необходимо установить командой: ```$ npm install -g grunt-cli```

## Инициализация:
* клонируем репозиторий
* переходим в директорию с проектом через консоль
* в консоли: ```$ npm install``` - запускается только один раз при разворачивании базового шаблона
* в консоли: ```$ grunt``` - запускается для создания минимизированной версии шаблона в директорию dest

## Описание:
За основу базового шаблона взят [html5-boilerplate](https://github.com/h5bp/html5-boilerplate). Из него убраны все избыточные сущности, в том числе [Modernizr](https://github.com/Modernizr/Modernizr). Для автоматизации процесса минификации подключены плагины grunt:
  * [copy](https://github.com/gruntjs/grunt-contrib-copy)
  * [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
  * [uglify](https://github.com/gruntjs/grunt-contrib-uglify)
  * [imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
  * [jshint](https://github.com/gruntjs/grunt-contrib-jshint)

Все настройки данных плагинов доступны в файле Gruntfile.js. После запуска команды grunt в консоли происходит копирование и минимизация базового шаблона в директорию dest.
