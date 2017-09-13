import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component{
    //comment like this anywhere else
    render(){
      return(
          
        <form className="store-selector">
            {/* but if inside the return(and wrapper), use this syntax */ }
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
            <button type="submit">Visit Store</button>
        </form>
      )
    }
}

export default StorePicker;

