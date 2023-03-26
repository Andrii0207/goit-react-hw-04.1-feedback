import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickButton = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / (good + neutral + bad)) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'top',
        fontSize: 40,
        color: '#010101',
        marginLeft: '80px',
        marginTop: '50px',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClick={clickButton}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};

export default App;

// =======================================================

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   clickButton = e => {
//     const { name } = e.target;

//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     // const { good, neutral, bad } = this.state;
//     // return good + neutral + bad;
//     const values = Object.values(this.state);
//     return values.reduce((acc, item) => acc + item, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return parseInt((good / (good + neutral + bad)) * 100);
//   };

//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           // display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'top',
//           fontSize: 40,
//           color: '#010101',
//           marginLeft: '80px',
//           marginTop: '50px',
//         }}
//       >
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={['good', 'neutral', 'bad']} onClick={this.clickButton} />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
