import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPoll } from '../action/polls';

class AddPoll extends Component {
  state = {
    poll: {
      question: '',
      a: '',
      b: '',
      c: '',
      d: ''
    }
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState(prevstate => ({
      poll: {
        ...prevstate.poll,
        [name]: value
      }
    }));
  };
  isDisabled = () => {
    const { question, a, b, c, d } = this.state.poll;
    return question === '' || a === '' || b === '' || c === '' || d === '';
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push('/');
    console.log('add poll : ', this.state.poll);
    this.props.dispatch(handleAddPoll(this.state.poll));
  };
  render() {
    const { question, a, b, c, d } = this.state.poll;
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is your question</h3>
        <input
          type="text"
          value={question}
          onChange={this.handleInputChange}
          name="question"
          className="input"
        />
        <h3>What are the options?</h3>
        <label className="label" htmlFor="a">
          A.
        </label>
        <input
          className="input"
          name="a"
          id="a"
          type="text"
          onChange={this.handleInputChange}
          value={a}
        />
        <label className="label" htmlFor="b">
          B.
        </label>
        <input
          className="input"
          name="b"
          id="b"
          type="text"
          onChange={this.handleInputChange}
          value={b}
        />
        <label className="label" htmlFor="c">
          C.
        </label>
        <input
          className="input"
          name="c"
          id="c"
          type="text"
          onChange={this.handleInputChange}
          value={c}
        />
        <label className="label" htmlFor="d">
          D.
        </label>
        <input
          className="input"
          name="d"
          id="d"
          type="text"
          onChange={this.handleInputChange}
          value={d}
        />
        <button className="btn" type="submit" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);
