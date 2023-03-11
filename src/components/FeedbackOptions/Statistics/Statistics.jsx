const Statistics = ({ title, good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <ul>
        <li>Total: {total()}</li>
        <li>Positive percentage: {positivePercentage ? positivePercentage() : 0}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
