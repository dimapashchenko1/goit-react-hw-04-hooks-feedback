import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, addFeedback }) {
  return options.map(option => (
    <button
      type="button"
      onClick={() => addFeedback(option)}
      className={styles.btn}
      key={option}
    >
      {makeFirstLetterBig(option)}
    </button>
  ));
}

function makeFirstLetterBig(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  addFeedback: PropTypes.func.isRequired,
};
