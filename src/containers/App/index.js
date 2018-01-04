import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cssjson from 'cssjson';
import './style.scss';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  state = {};

  handleChange = e => this.setState({ css: e.target.value });

  convertToJSON = () => this.setState({ json: cssjson.toJSON(this.state.css) });

  render() {
    return (
      <div>
        <h1>css to json</h1>
        <p>
          Uses <a href="https://github.com/aramk/CSSJSON">CSSJSON</a> to convert
          CSS to JSON.
        </p>
        <div className="elts">
          <textarea
            placeholder="Insert CSS here"
            onChange={this.handleChange}
          />
          <textarea value={JSON.stringify(this.state.json, 0, 2)} />
        </div>
        <button onClick={this.convertToJSON}>To JSON</button>
      </div>
    );
  }
}

export default connect()(App);
