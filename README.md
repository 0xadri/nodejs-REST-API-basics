# Node.js REST API basics

Skeleton to get started with a REST API built with `Node.js` and `Express`.

# 🚀 Try It Live 🚀

### Deployed on Render

 - Try the GET method directly on https://nodejs-rest-api-basics.onrender.com/feed/posts

 - Try the GET and POST methods on https://codepen.io/adrien-be/pen/oggJQqX

### Deployed on Glitch

 - Try the GET method directly on https://illustrious-adaptable-cuticle.glitch.me/feed/posts

 - Try the GET and POST methods on https://codepen.io/adrien-be/pen/jEEdgme

# Tech

`Javascript` · `Node.js`· `Express`

## Build

1. download/clone this repo locally

2. `npm install`

3. `npm run dev`

## Play in `codepen.io` or equivalent

`HTML File`

>     <button id="get">GET</button>
>     <button id="post">POST</button>

`JS File`

>     const getButton = document.getElementById("get");
>     const postButton = document.getElementById("post");
>
>     getButton.addEventListener("click", () => {
>       fetch('http://127.0.0.1:8080/feed/posts')
>         .then(res => res.json())
>         .then(resData => console.log(resData))
>         .catch(err => console.log(err));
>     });
>
>     // changed 'localhost' to '127.0.0.1' to make it work
>     postButton.addEventListener("click", () => {
>       fetch('http://127.0.0.1:8080/feed/post', {
>         method: 'POST',
>         body: JSON.stringify({
>           title: 'Another Title',
>           content: 'And just some more content'
>         }),
>         headers: {
>           'Content-Type': 'application/json'
>         }
>       })
>         .then(res => res.json())
>         .then(resData => console.log(resData))
>         .catch(err => console.log(err));
>     });
