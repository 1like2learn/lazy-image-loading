import React from "react";

import ImageCont from "./components/imageCont";
import './App.css';

const imageData = {
  thumbnail: "https://forge-homework.s3.amazonaws.com/thumb.jpg", 
  fullSize: "https://forge-homework.s3.amazonaws.com/fullsize.jpg",
  alt: "Istanbul street corner. Photographer: Sanaan Mazhar"
}
/**
 * App is the component that is rendered in index.js at the application source directory.
 * All components that need to be rendered need to be imported into app.
 */
function App() {
  return (
    <div className="App">
      <ImageCont imageData = {imageData}/>
    </div>
  );
}

export default App;
