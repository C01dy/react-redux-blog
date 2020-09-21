### О проекте
***
Данный проект предстявляет собой простой блог с реализацией CRUD операций. Изначально был написан на javascript, позже в процессе изучения typescript был переписан на нём, чтобы закрепить изученное. Добавление нового поста работает следующим образом: в навигационной панели присутствует вкладка "Добавить пост", при клике на которую при помощью библиотеки react-router-dom происходит открытие отдельной страницы, на данной странице присутствуют поля для ввода темы поста и содержимого, и кнопка "Добавить". После клика на данную кнопку происходит редирект на главную страницу с постами, в которой уже присутствует новый пост.
Для имитации серверной части был использован моковый JSON-server.
В качестве api для обработки запросов используется библиотека axios. Все запросы на сервер происходят в асинхронных экшенах при помощи библиотеки redux-thunk.
Управлением глобальным состоянием приложения занимается redux, а для хранения локального используются реакт хуки.
Что касается стилей, то при написании проекта была изучена и использована библиотека material-ui, в которой удобно используются стилизованные react-компоненты.
### Стек технологий
***
* Typescript
* React
* React router
* Redux
* Material-UI
* Axios
* JSON-server
### Как запустить проект?
***
1. Установите npm, выполнив команду ```npm install ```
2.  Запустите локальный сервер ```npm run json-server``` (Сервер запустится на 4000 порту, но вы можете поменять порт в файле package.json)
3. Введите команду ```npm start``` для запуска приложения


