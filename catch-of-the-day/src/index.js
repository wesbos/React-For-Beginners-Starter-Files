import React from "react";
import { render } from "react-dom"; // we only need this one method from this ... library?
import StorePicker from "./components/Storepicker"; //needs relative path to where that components file is
import App from "./components/App";
import "./css/style.css"; // webpack is part of rcreate-react app and is handling this

render(<App />, document.querySelector("#main"));

// storepicker is the component we'll spit out into the DOM, we make it a self-closing tag because that saves us having to worry if we closed it, but you don't hafta// react output needs to get mounted to a div in the DOM - can be a div inside things if not using react for everything, or can be the whole page hitting a blank root div
