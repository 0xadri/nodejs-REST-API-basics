exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post' }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  console.log('ah!')
  // Create post in DB
  res.status(201).json({
    message: 'Post created successfully!',
    post: { 
      id: new Date().toISOString(),
      title: title,
      content: content
    }
  })
}

// postButton.addEventListener("click", () => {
//   fetch('http://localhost:8080/feed/post', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'Another Title',
//       content: 'And just some more content'      
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.json())
//     .then(resData => console.log(resData))
//     .catch(err => console.log(err));
// });