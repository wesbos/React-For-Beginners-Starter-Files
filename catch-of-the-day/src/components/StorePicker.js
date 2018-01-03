import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component{
    //comment like this anywhere else

    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this)
    // }

    //OR
    
    //bind inside of html or use arrow function
    //pro of this way is cleaner and easier, but should be used when the function will only be 
    //used a limited number of times. If multiple times, use ^^ so you're not creating a new
    //function each time.

    goToStore(e){
        e.preventDefault();
        const input = this.storeInput.value
        console.log(this.context.router.transitionTo(`store/${input}`))
    }

    
    render(){

      return(
          
        <form className="store-selector" onSubmit={(e)=>this.goToStore(e)}>
            {/* but if inside the return(and wrapper), use this syntax */ }
            <h2>Please Enter a Store</h2>
            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} 
            ref={(input)=> this.storeInput = input}/>
            <button type="submit">Visit Store</button>
        </form>
      )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;

