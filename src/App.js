
import React, { useState } from 'react';
import './App.css';

const allQuestions = [
  { category: "Selbstreflexion & Lebensweg", question: "Welche drei Entscheidungen in deinem Leben haben dich am stärksten geprägt?" },
  { category: "Selbstreflexion & Lebensweg", question: "Wenn du deinem jüngeren Ich einen einzigen Ratschlag geben könntest, welcher wäre das?" },
  { category: "Selbstreflexion & Lebensweg", question: "Glaubst du, dass Menschen sich wirklich ändern können – oder nur anpassen?" },
  { category: "Selbstreflexion & Lebensweg", question: "Was wäre eine “verbotene” Sehnsucht, die du dir insgeheim manchmal erlaubst?" },
  { category: "Selbstreflexion & Lebensweg", question: "Gibt es einen Moment in deinem Leben, den du am liebsten wieder und wieder erleben würdest?" },
  { category: "Liebe & Beziehungen", question: "Was war für dich der schönste Beweis von Liebe, den dir jemand gegeben hat?" },
  { category: "Liebe & Beziehungen", question: "Woran merkst du selbst, dass du jemanden wirklich liebst?" },
  { category: "Liebe & Beziehungen", question: "Gibt es in einer Beziehung Themen, bei denen du niemals Kompromisse machen würdest?" },
  { category: "Liebe & Beziehungen", question: "Glaubst du, man kann gleichzeitig glücklich und nicht verliebt sein – oder umgekehrt?" },
  { category: "Liebe & Beziehungen", question: "Was bedeutet für dich emotionale Intimität?" },
  { category: "Kindheit & Jugend", question: "Was ist deine früheste Kindheitserinnerung?" },
  { category: "Kindheit & Jugend", question: "Hattest du als Kind einen Lieblingsplatz, an den du dich immer zurückgezogen hast?" },
  { category: "Kindheit & Jugend", question: "Was war dein größter Traum, als du 8 Jahre alt warst?" },
  { category: "Kindheit & Jugend", question: "Gab es ein Kuscheltier oder Spielzeug, ohne das du nicht einschlafen konntest?" },
  { category: "Kindheit & Jugend", question: "Was war das schönste Geburtstagsgeschenk, das du je bekommen hast?" },
  { category: "Kindheit & Jugend", question: "Welcher Geruch oder Geschmack erinnert dich sofort an deine Kindheit?" },
  { category: "Kindheit & Jugend", question: "Gab es in deiner Kindheit einen „magischen Ort“, der für dich etwas Besonderes war?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Was war die schönste Reise deines Lebens – und warum?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Gab es jemals einen Ort, an dem du das Gefühl hattest: 'Hier gehöre ich hin'?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Welches Souvenir oder Mitbringsel bedeutet dir bis heute am meisten?" },
  { category: "Reisen & Sehnsuchtsorte", question: "An welchem Ort hast du dich das erste Mal völlig frei gefühlt?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Welche drei Länder möchtest du unbedingt noch sehen, bevor du stirbst?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Wenn du für ein Jahr an einem Ort auf der Welt leben könntest – welcher wäre es?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Bist du auf Reisen lieber Planer oder Abenteurer?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Glaubst du, man kann einen Menschen erst richtig kennenlernen, wenn man mit ihm reist?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Gibt es einen Ort, an dem du etwas losgelassen hast, was dich lange belastet hat?" },
  { category: "Reisen & Sehnsuchtsorte", question: "Wo auf der Welt würdest du am liebsten 'neu anfangen'?" }
];

function App() {
  const [remaining, setRemaining] = useState([...allQuestions]);
  const [current, setCurrent] = useState(null);
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
    setCurrent(null);
    setGameOver(false);
  };

  return (
    <div className="App">
      <h1>Fragen-App</h1>
      <div className="question-box">
        {gameOver ? (
          <p>Alle Fragen wurden angezeigt! 🎉</p>
        ) : current ? (
          <div>
            <p className="category">{current.category}</p>
            <p className="question">{current.question}</p>
          </div>
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
