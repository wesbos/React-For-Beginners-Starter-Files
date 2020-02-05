import React from 'react';

class Order extends React.Component {
    render() {
        return(
            <div className="order">
                <span>{this.props.otag}</span>
            </div>
        )
    }
}

export default Order;