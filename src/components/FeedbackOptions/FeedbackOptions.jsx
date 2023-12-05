import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.feedbackOptionsList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.feedbackOptionsBtn}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
