# Toxin

Цель данного проекта: Изучить React, Redux, Mobx

Описание проекта Toxin: сайт отеля с возможностью выбора и бронирования определенного номера. Макеты можно посмотреть вот тут https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/FSD-frontend-education-program.-The-2nd-task?node-id=0%3A1

Проект будет состоять из 3 модулей(страниц):

1. Модуль Main. В нем всего 1 страница - главная. Адрес - /
2. Модуль Rooms. Состоит из 3 страниц. Страница с выбором номера и фильтрами и страница конкретного номера, страница мои номера
3. Модуль Auth. Состоит из 3 страниц: вход, регистрация, забыли пароль.

# Как работать с задачами

Базовая ветка - Master.
Коммиты в мастер строго запрещены, все изменения по проекту в мастер должны попадать через мержреквесты (МР).
Ниже приведен флоу по работе в проекте:
Каждая задача должна быть оформлена через ишью(issues).
После создания ишью ему автоматически присваивается номер. Даже если ишью ни на кого не назначена, необходимо спросить у команды (либо у менеджера проекта), не работает ли уже кто-то над этой задачей. В случае получения одобрения необходимо назначить ишью на себя.
После этого создаете ветку для выполнения ишью в формате issueNumber-short-task-description.
В ходе работы над задачей делаете коммиты с содержательными пояснениями на англйском языке.

- Пример плохого коментария к коммиту: "fix".
- Пример хорошего комментария к комиту: "create profile service".

После завершения все коммиты пушатся в текущую ветку.
Перед созданием ветки обязательно проверьте, нет ли конфликтов в вашей текущей ветке с мастером (можно находясь в нужной ветке выполнить `git pull origin master`).
Затем создается ПР в мастер. После создания ПРа в первую очередь небходимо проверить его самостоятельно. Обращаем внимание не запушили ли закомментированный код, работает ли весь функционал в соответствии с задачей, описанной в ишью. Плюс проверить работоспособность хотябы в двух браузерах, к примеру хром и файрфокс. И только после этого уже просить других смотреть ПР.
Все участники проекта смотрят новый код и оставляют замечания (дискашены).
ПР принимается только после исправления всех дискашенов.
Закрытием задачи является мерж ветки в мастер. Мержить позволяется только в случае получения одобрения ПРа всеми участниками команды (гитлаб позволяет ставить апрувы, нужно попросить всех участников поставить их, если замечаний больше нет).

# Про тех. требования

Приложение нужно сделать на базе [react](https://reactjs.org/) в качестве базовой архитектуры можно использовать [next.js](https://nextjs.org/) или [react create app c typescript](https://create-react-app.dev/docs/adding-typescript/). Для статической типизации использовать typescript.  

В качестве базовых компонентов можно использовать [материал](https://mui.com/)

Для управления данными приложения есть библиотеки [redux](https://redux.js.org/)  и [mobx](https://mobx.js.org). Мы бы хотели чтобы вы сами сделали обоснованный выбор почему берете тот или иной стейт менеджер.

Для альтернативы серверу предлагаем использовать сервис firebase. Про то как с ним работать и настроить снизу будет отдельная инструкция

# Про доп. требования

не забывайте при разработке проекта следовать стандартам metalamp https://github.com/fullstack-development/front-end-best-practices

Также при отправке форм на сервер неободимо блокировать кнопку пока идет запрос

# Про firebase

подсказки как работать с firebase https://github.com/fullstack-development/toxin-group-project/issues/44

