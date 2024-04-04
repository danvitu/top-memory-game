import "../styles/Header.css";

export default function Header({
  score,
  bestScore,
  handleInputChange,
  searchingClick,
}) {
  return (
    <div className="header">
      <div className="game">
        <h1>Memory Game</h1>
        <p>
          Get points by clicking on an image but do not click on any more than
          once!
        </p>
        <div className="search">
          <p>Theme for game:</p>
          <input
            className="inputSearch"
            type="text"
            name="search"
            id="search"
            onChange={handleInputChange}
          ></input>
          <button className="btn-search" onClick={searchingClick}>
            Search
          </button>
        </div>
      </div>
      <div className="scores">
        <p className="score">Score: {score} </p>
        <p className="best-score">Best score: {bestScore} </p>
      </div>
    </div>
  );
}
