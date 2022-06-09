# Live Streaming And Live Chat Apps

 

 It's kinda like Webinarjam, you can create optin form to join webinar. 
 
 This app is monolith application built with `adonisjs, inertia, svelte and tailwindcss`.

 for databases you can select one of `sqlite, cockroachdb, postgresql, mysql`


## requirements
1. redis
2. sqlite / mysql / postgres / cockroachdb
3. nodejs


demo optin page : https://live.drip.id/turing 

demo live stream : https://live.drip.id/view/37e938c979d0a42bce758804dae2ee83
<br><br> 

demo dashboard :
https://live.drip.id/login  <br>
email login : bisnis.maulanashalihin@gmail.com <br>
password : xh9q5tui

develop apps with this command

```
 npm install
 cp .env.example .env
 mkdir tmp
 node ace migration:run
 node ace db:seed 
 npm run dev
```


deploy apps with this command

```
 cp ../.env.example .env
 mkdir tmp
 npm install
 node ace migration:run
 node ace db:seed
 pm2 start server.js
```
