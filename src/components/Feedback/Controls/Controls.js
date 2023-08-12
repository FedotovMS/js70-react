import PropTypes from 'prop-types';
import styles from './Contrlos.module.css';
const Controls = ({ onButtonClick }) => {
  return (
    <ul className={styles.buttons}>
      <li className={styles.item}>
        <button
          className={styles.button}
          type="button"
          onClick={() => onButtonClick('good')}
        >
          Good
        </button>
      </li>
      <li className={styles.item}>
        <button
          className={styles.button}
          type="button"
          onClick={() => onButtonClick('neutral')}
        >
          Neutral
        </button>
      </li>
      <li className={styles.item}>
        <button
          className={styles.button}
          type="button"
          onClick={() => onButtonClick('bad')}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default Controls;

Controls.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
