# lazy-image-loading

This is a small React app created to fulfill a code challenge given to me by a potential employer. The app will display a thumbnail image until the full-size one loads.

I generated the basic file structure using create-react-app. 

I got the idea to add a transition from [this article.](https://codebrahma.com/how-to-smoothly-render-images-in-react-app/)

My first attempt at solving this challenge was creating a piece of state that is set to true when the larger image loads. When the state is true the styles of the images would change, the thumbnail would disappear, and the larger image would appear. Unfortunately, this caused a re-render of the DOM. The above article has a smooth transition because the element's classes are changing rather the it's properties.