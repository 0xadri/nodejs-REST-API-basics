# Node.js REST API basics

Skeleton to get started with a REST API built with `Node.js` and `Express`.

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
>       fetch('http://localhost:8080/feed/posts')
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
