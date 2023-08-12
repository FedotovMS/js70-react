import React, { Component } from 'react';
import Controls from './Controls/Controls';
import Statistics from './Statistics/Statistics';
import styles from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className={styles.feedback}>
        <h2>Please leave feedback</h2>
        <Controls onButtonClick={this.handleButtonClick} />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <p className={styles.message}>No feedback given yet</p>
        )}
      </div>
    );
  }
}

export default Feedback;
