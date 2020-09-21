### О проекте
***
Данный проект предстявляет собой простой блог с реализацией CRUD операций. Изначально был написан на javascript, позже в процессе изучения typescript был переписан на нём, чтобы закрепить изученное.
Для имитации серверной части был использован моковый JSON-server.
В качестве api для обработки запросов используется библиотека axios. Все запросы на сервер происходят в асинхронных экшенах при помощи библиотеки redux-thunk.
Управлением глобальным состоянием приложения занимается библиотека redux, а для хранения локального используются реакт хуки.
Что касается стилей, то при написании проекта была изучена и использована библиотека material-ui, в которой удобно используются стилизованные react-компоненты.


### Стек технологий
* Typescript
* React
* Redux
* Material-UI
* Axios
* JSON-server

### Как запустить проект?
1. Установите npm, выполнив команду ```npm install ```
2.  Запустите локальный сервер ```npm run json-server``` (Сервер запустится на 4000 порту, но вы можете поменять порт в файле package.json)
3. Введите команду ```npm start``` для запуска приложения


