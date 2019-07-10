import React, {Fragment} from 'react';

class StatusOptions extends React.Component{
  render() {

    return (
      <Fragment>
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out!</option>
      </Fragment>
    )
  }
};

export default StatusOptions;
