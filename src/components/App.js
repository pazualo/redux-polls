import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitData } from '../action/shared';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Leaderboard from './Leaderboard';
import AddPoll from './Addpoll';
import Poll from './Poll';
import Nav from './Nav';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/polls/:id" component={Poll} />
                <Route path="/add" component={AddPoll} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default connect(mapStateToProps)(App);
