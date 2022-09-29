# vue-github-search

## Description
Написать небольшое приложение для работы с github.

В приложении должна быть строка поиска, в которую можно вписать что-то  и по этому запросу поискать репозиторий на гитхабе.

Не используя кнопку для поиска. Сам поиск должен осуществляться, когда пользователь начинает печатать запрос. Будет плюсом, если при поиске будет отображаться лоадер.

Под строкой поиска должен быть список, результат поиска. Тут будут названия репозиториев в краткой информацией по каждому репозиторию. На этой же странице желательно сделать 1-2 фильтра, которые отфильтруют репозитории по какому-то из параметров.

По нажатии на название репозитория в результате выдачи, должен быть переход на страницу репозитория внутри приложения. Туда нужно подтянуть расширенную информацию по репозиторию (не обязательно много, скорее нужна та информация которая не возвращается в результатах поиска). 


## [SEE RESULT](https://vercel.com/missnatalip-mailru/github-search-test)

## Technologes: Vue, Vuex, Vue-router, Vuetify, axios, moment

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
