import React from 'react';

class NotFound extends React.Component {
  render() {
    return(
      <div className="notFound">
        <h2>Go Fish.</h2>
        <p className="lead">This page couldn't be found. Please check the URL and try again. </p>
        <a href="/">
          <button>
            Go Fishing.
          </button>
        </a>
      </div>
    )
  }
}

export default NotFound;
