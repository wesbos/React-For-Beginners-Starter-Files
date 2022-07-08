import React, {Fragment} from 'react';

class StorePicker extends React.Component {
    render(){
        // return <p>I am the store Picker!!!</p>
        // return React.createElement('p', {className:'hey'}, 'Heyyyyyoo!!!')
        return (  
        <Fragment>
            {/* JavaScript */}
            {/* <p>Fish!</p> */}
            <form className='store-selector'>
                <h2>Please Enter A Store!</h2>
                <input type="text" required placeholder='Store Name'/>
                <button type='submit'>Visit Store  →</button>
            </form>
        </Fragment>)

    }
}
export default StorePicker;