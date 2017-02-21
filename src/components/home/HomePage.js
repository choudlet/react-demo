import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
      <h1>Course Adminstration</h1>
      <p>I am building this with React so it is super awesome</p>
      <Link to="about" className="btn btn-primary btn-lg">Learn More </Link>
      </div>
    );
  }
}

export default HomePage;
