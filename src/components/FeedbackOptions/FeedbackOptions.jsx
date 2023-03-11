import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, title, onClick }) => {
  return (
    <ul className={css.button}>
      {title && <h2>{title}</h2>}
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
