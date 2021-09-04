import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>Good: {good}</span>
      <span className={styles.span}>Neutral: {neutral}</span>
      <span className={styles.span}>Bad: {bad}</span>
      <div className={styles.div}>
        <p className={styles.p}>Total: {total}</p>
        <p className={styles.p}>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
