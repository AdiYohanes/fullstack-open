/* eslint-disable no-unused-vars */
import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive} %`} />
    </div>
  );
};

// const Anecdote = ({ anecdote }) => {
//   return (
//     <div>
//       <h2>Anecdote of the Day</h2>
//       <p>{anecdote}</p>
//     </div>
//   );
// };
const App = () => {
  // const anecdotes = [
  //   "If it hurts, do it more often.",
  //   "Adding manpower to a late software project makes it later!",
  //   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  //   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  //   "Premature optimization is the root of all evil.",
  //   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  //   "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  //   "The only way to go fast, is to go well.",
  // ];
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [anecdote, setAnecdote] = useState(
  //   anecdotes[Math.floor(Math.random() * anecdotes.length)]
  // );

  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positive = total > 0 ? (good / total) * 100 : 0;
  // const selectRandomAnecdote = () => {
  //   setAnecdote(anecdotes[Math.floor(Math.random() * anecdotes.length)]);
  // };

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
      </div>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        {/* <Button handleClick={selectRandomAnecdote} text="Next Anecdote" /> */}
      </div>

      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      ) : (
        <p>No feedback given</p>
      )}
      {/* <Anecdote anecdote={anecdote} /> */}
    </div>
  );
};

export default App;
