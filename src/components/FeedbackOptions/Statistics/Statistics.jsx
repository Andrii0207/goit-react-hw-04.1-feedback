const Statistics = ({ title, good, neutral, bad }) => {
  return (
    <ul>
      {title && <h2>{title}</h2>}
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
  );
};

export default Statistics;
