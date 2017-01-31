// let's go!
import React from 'react';
import { render } from 'react-dom'; // only import 'render' method from ReactDOM (vs importing entire package)

class StorePicker extends React.Component {
  render() {
    return <p>Hello</p>
  }
}

render(<StorePicker/>, document.querySelector('#main'));