import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return (
    <ul
      className={css.button}
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'left',

        // alignItems: 'top',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      {options.map((option, index) => (
        <li key={index}>
          <button type="button" name={option} value={option} onClick={onClick}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};
