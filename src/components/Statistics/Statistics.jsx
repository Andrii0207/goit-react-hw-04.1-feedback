const Statistics = ({ title, good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <br />
      {total() ? (
        <ul>
          <li>Total: {total()}</li>
          <li>Positive feedback:{positivePercentage()}%</li>
        </ul>
      ) : (
        <p>No given feedback</p>
      )}
    </div>
  );
};

export default Statistics;
