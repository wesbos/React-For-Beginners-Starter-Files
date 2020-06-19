import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="derpaderp" quantity={400} cool="true" />
          {/* props being passed in, note that number props need curly braces */}
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
