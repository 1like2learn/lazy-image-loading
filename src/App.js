import React from "react";

import ImageCont from "./components/imageCont";
import './App.css';

/**
 * App is the component that is rendered in index.js at the application source directory.
 * All components that need to be rendered need to be imported into app.
 */
function App() {
  return (
    <div className="App">
      <ImageCont />
    </div>
  );
}

export default App;
