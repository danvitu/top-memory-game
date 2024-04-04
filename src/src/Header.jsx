import "../styles/Header.css";

export default function Header({ score, bestScore }) {
  return (
    <div className="header">
      <div className="game">
        <h1>Memory Game</h1>
        <p>
          Get points by clicking on an image but do not click on any more than
          once!
        </p>
      </div>
      <div className="scores">
        <p className="score">Score: {score} </p>
        <p className="best-score">Best score: {bestScore} </p>
      </div>
    </div>
  );
}
