import React from 'react';

// use Capitals to mark what is a reusable component
class StorePicker extends React.Component {
	render() {
		{/* This is a comment in JSX o_o. Between the return and the first AND ONLY allowed element is NOT okay.  */}
		return (
			<form className="store-selector"> 
				{/* This is also an acceptable comment placement in JSX o_o */}
				<h2>Please enter a Store</h2>
				<input type="text" required placeholder="Store Name" />
				<button type="submit"> Visit Store! </button>
			</form>
		)
	}
}

export default StorePicker;