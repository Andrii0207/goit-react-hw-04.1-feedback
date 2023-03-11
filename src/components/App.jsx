import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './FeedbackOptions/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButton = e => {
    const { name } = e.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          title="Please leave feedback"
          onClick={this.clickButton}
        />
        <Statistics
          title="Statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default App;
