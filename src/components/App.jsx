import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onButtonClick = evt => {
    const option = evt.target.name;
    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) return 0;
    return (good / totalFeedback) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage().toFixed(0);
    const options = Object.keys(this.state);
    const onButtonClick = this.onButtonClick;
    return (
      <div className={css.container}>
        <div className={css.wrapper}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={onButtonClick}
            />
          </Section>

          {countTotalFeedback > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </div>
    );
  }
}
