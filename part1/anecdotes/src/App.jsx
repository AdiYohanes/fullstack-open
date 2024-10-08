/* eslint-disable no-unused-vars */
import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Anecdote = ({ title, anecdote, votes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [anecdoteIndex, setAnecdoteIndex] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );

  const selectRandomAnecdote = () => {
    setAnecdoteIndex(Math.floor(Math.random() * anecdotes.length));
  };

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[anecdoteIndex] += 1;
    setVotes(newVotes);
  };

  const mostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const maxIndex = votes.indexOf(maxVotes);
    return {
      anecdote: anecdotes[maxIndex],
      votes: maxVotes,
    };
  };

  const mostVoted = mostVotedAnecdote();

  return (
    <div>
      <Anecdote
        title="Anecdote of the Day"
        anecdote={anecdotes[anecdoteIndex]}
        votes={votes[anecdoteIndex]}
      />

      <div>
        <Button handleClick={selectRandomAnecdote} text="Next Anecdote" />
        <Button handleClick={voteAnecdote} text="Vote" />
      </div>
      
      <Anecdote
        title="Anecdote with Most Votes"
        anecdote={mostVoted.anecdote}
        votes={mostVoted.votes}
      />
    </div>
  );
};

export default App;
