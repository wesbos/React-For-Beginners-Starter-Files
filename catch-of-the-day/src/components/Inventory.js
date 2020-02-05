import React from 'react';

class Inventory extends React.Component {
    render() {
        return(
            <div className="inventory">
                <span>{this.props.itag}</span>
            </div>
        );
    }
}

export default Inventory;