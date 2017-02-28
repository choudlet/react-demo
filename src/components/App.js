import React, {PropTypes} from 'react';
import Header from "./common/header";
import {connect} from 'react-redux';



class App extends React.Component {
  render(state) {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired,
  loading:PropTypes.bool.isRequired
};


function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    loading: state.numAjaxCallsInProgress > 0
  };
}


export default connect(mapStateToProps)(App);
