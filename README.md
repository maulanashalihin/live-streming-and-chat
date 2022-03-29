# live-streming-and-chat
live streaming apps with live chat service

Live Streaming And Live Chat Apps

 Tts kinda like webinarjam.   your lead fill the optin form and join live streaming.

this app is monolith application built with adonisjs, inertia, and svelte.

demo optin page : https://bwa.drip.id/jogjamengaji

demo live stream : https://bwa.drip.id/view/1e1fe9ac00c5860e6f07f2044586c46b

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
