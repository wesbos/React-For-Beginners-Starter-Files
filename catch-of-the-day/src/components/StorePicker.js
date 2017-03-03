import React from 'react';


	class StorePicker extends React.Component {
		render() {
			{/* Hello, this is the correct JSX syntax for commenting */ }
			return (
				<form className='store-selector'>
					<h2>Please Enter a Store</h2>
					<input type='text' required placeholder='Store Name'/>
					<button type='submit'>Visit Store -></button>
				</form>
			)
		}
	}

export default StorePicker;