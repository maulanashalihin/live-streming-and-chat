# live-streming-and-chat
live streaming apps with live chat service

Live Streaming And Live Chat Apps

 Tts kinda like webinarjam.   your lead fill the optin form and join live streaming.

this app is monolith application built with adonisjs, inertia, and svelte.

demo optin page : https://bwa.drip.id/jogjamengaji
demo live stream : https://bwa.drip.id/view/1e1fe9ac00c5860e6f07f2044586c46b

depoly apps with this command

```
 npm run build
 cd build
 cp ../.env.example .env
 node ace migration:run
 node ace db:seed
 pm2 start server.js
```
