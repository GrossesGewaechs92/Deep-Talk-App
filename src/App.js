
import React, { useState } from 'react';
import './App.css';

const allQuestions = [
  "Welche politischen Werte sind dir am wichtigsten – und warum?",
  "Gibt es eine politische Entscheidung in Deutschland, die du nie nachvollziehen konntest?",
  "Welches Buch hat dich nachhaltig geprägt – und warum?",
  "Was bedeutet für dich Genuss beim Essen?",
  "Welcher Wein hat dich emotional oder geschmacklich am meisten überrascht?",
  "Was war die wichtigste Erkenntnis über dich selbst in den letzten zwei Jahren?",
  "Was bedeutet für dich emotionale Nähe?"
];

function App() {
  const [remaining, setRemaining] = useState([...allQuestions]);
  const [current, setCurrent] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const showQuestion = () => {
    if (remaining.length === 0) {
      setGameOver(true);
      return;
    }
    const index = Math.floor(Math.random() * remaining.length);
    const question = remaining[index];
    setCurrent(question);
    setRemaining(remaining.filter((_, i) => i !== index));
  };

  const resetGame = () => {
    setRemaining([...allQuestions]);
    setCurrent("");
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Fragen-App</h1>
      <div className="question-box">
        {gameOver ? (
          <p>Alle Fragen wurden angezeigt! 🎉</p>
        ) : current ? (
          <p>{current}</p>
        ) : (
          <p>Klicke auf „Neue Frage“, um zu starten.</p>
        )}
      </div>
      <div className="buttons">
        {!gameOver && (
          <button onClick={showQuestion}>Neue Frage</button>
        )}
        <button onClick={resetGame}>Spiel neu starten</button>
      </div>
    </div>
  );
}

export default App;
