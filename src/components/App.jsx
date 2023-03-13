import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

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

  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
    const values = Object.values(this.state);
    return values.reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return parseInt((good / (good + neutral + bad)) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'top',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onClick={this.clickButton} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
