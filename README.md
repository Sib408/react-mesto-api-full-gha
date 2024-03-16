[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. 

### Функциональность проекта

#### Backend:

В проекте созданы схемы и модели пользователей и карточек с контентом:

`card` — схема карточки с контентом

`user` — схема пользователя

В проекте созданы эндпоинты:
  - /cards — обрабатывает:
     
       GET запросы — отдаёт все карточки из БД

       POST запросы — создаёт новую карточку с контентом

    - /cards/:cardId — обрабатывает DELETE запросы, удаляет карточку по cardId
     
      - /cards/:cardId/likes — обрабатывает:
         
        PUT запросы — добавляет лайк карточке с контентом

        DELETE запросы — удаляет лайк карточке с контентом

  - /signin — обрабатывает POST запросы, производит аутентификацию пользователя
      
 - /signup — обрабатывает POST запросы, производит регистрацию пользователя
      
 -  /users — обрабатывает:
     
       GET запросы — отдаёт всех пользователей из БД
       
       POST запросы — создаёт нового пользователя
       
     - /users/:userId — обрабатывает GET запросы, отдаёт пользователя по userId
     
     - /users/me — обрабатывает:
     
        GET запросы — отдаёт информацию о текущем пользователе
        
        PATCH запросы — обновляет информацию о пользователе
        
        DELETE запросы — производит выход пользователя, с удалением JWT-токена из Cookie
        
         - /users/me/avatar — обрабатывает PATCH запросы, обновляет аватар пользователя
         
##### Созданы мидлвары:

- Централизованной обработки ошибок
  
- Авторизации пользователя
  
- Ограничитель количества запросов (защита от DDoS атак)
  
- Поддержки CORS запросов, включая обработку предварительных запросов
  
- Логирования запросов и ошибок
  
- Производится валидация поступающих данных:
  
    - до передачи информации контроллерам с помощью joi и celebrate
      
    - на уровне схем с помощью validator и встроенных методов mongoose
      
#### Frontend:

Возможность регистрации и аутентификации пользователя

Возможность редактировать информацию о пользователе (установить имя пользователя, информацию «о себе», аватар)

Возможность создавать карточки мест (добавить\удалить карточку места, поставить\снять лайк карточке)

Возможность просматривать детальную фотографию карточки

Реализована валидация форм с помощью кастомного хука

### Директории проекта
 -  /backend — директория с файлами бэкенд части проекта
   
     - /controllers — директория с файлами контроллеров
    
     - /errors — директория с файлами кастомных ошибок
    
    -  /middlewares — директория с мидлварами
    
    - /models — директория с файлами описания схем и моделей
    
    - /routes — директория с файлами роутера
    
    - /utils — директория со вспомогательными файлами

- /frontend — директория с файлами фронтенд части проекта
  
   - src/blocks — директория с CSS файлами

   - src/components — директория с компонентами
  
   - src/contexts — директория с элементами контекста
     
    - src/fonts — директория со шрифтами
  
    - src/images — директория с файлами изображений
      
    - src/utils — директория со вспомогательными файлами
  
    - src/vendor — директория с файлами библиотек
      
 ### Технологии
 <div align="center">
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NODE Js Badge"/>
    <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="NGINX Badge"/>
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAF" alt="Express.js Badge"/>
    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge"/>
    <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT Badge"/>
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="Eslint Badge"/>


</div>
      
### Запуск проекта

#### Backend:

`npm lint` — запускает проверку линтером

`npm run start` — запускает сервер

`npm run dev` — запускает сервер с hot-reload

#### Frontend:

`npm run build` — запуск проекта в режиме продакшн, с формированием файлов подготовленных к деплою в директории /build

`npm start` — запуск проекта в режиме разработки

### Ссылки на проект

IP 130.193.34.84

Адрес репозитория: https://github.com/Sib408/react-mesto-api-full-gha.git

Frontend https://sib408.nomoredomains.xyz/

Backend https://api.sib408.mesto.nomoredomains.xyz/
