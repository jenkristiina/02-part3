import { useState } from 'react'

const Button = ({click, text}) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const Vote = ({click, text}) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(Array.from({length: anecdotes.length}, () => 0))
    // luodaan muuttuja, joka tallettaa jokaisen anekdootin saamat äänet taulukkoon ja pohjaksi annetaan 0

  const anecdoteClick = () => {
    const newAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(newAnecdote);
  };

  const voteClick = () => {
    const newVote = [...voted]; // luodaan taulukko joka pohjautuu voted muuttujaan
    newVote[selected]++; // jokainen klikkaus lisää ääniä yhdellä...
    setVoted(newVote) // ...ja tämä tieto päivitetään 'voted':iin
  }


  const mostVotedIndex = voted.indexOf(Math.max(...voted)); //muuttuja joka etsii 'voted':in eniten saadut äänet
  const mostVotedAnecdote = anecdotes[mostVotedIndex]; // tallettaa tekstin taulukkoon
  const mostVotedCount = voted[mostVotedIndex]; // tallettaa äänet taulukkoon
 

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <p>{anecdotes[selected]}</p>
      <Button click={anecdoteClick} text="Give me anecdote!" />
      <Vote click={voteClick} text="Vote" />
      <h2>Most voted</h2>
      <p>{`${mostVotedAnecdote}`}</p>
      <p>{`Has ${mostVotedCount} votes`}</p>
    </div>
  );
}

export default App
