import React from 'react';

class StorePicker extends React.Component{
    //comment like this anywhere else
    render(){
      return(
          
        <form className="store-selector">
            {/* but if inside the return(and wrapper), use this syntax */ }
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name"/>
            <button type="submit">Visit Store</button>
        </form>
      )
    }
}

export default StorePicker;

