import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./src/Cards";
import Header from "./src/Header";
import shuffle from "./src/shuffle";

export default function App() {
  const [urlsToDisplay, setUrlsToDisplay] = useState([]);
  const [imagesId, setImagesId] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [search, setSearch] = useState("cats");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getUnsplashPhotos = async () => {
      const apiKey = "aKJVxHB-vz92X_JoKbX8LyqW8_2drqZOvGUTOXYsr28";
      const searchQuery = search;
      const imgNum = 8;
      const orientation = "landscape";
      const data = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=${imgNum}&orientation=${orientation}`
      );
      const dataImgs = await data.json();
      setUrlsToDisplay(dataImgs.results);
    };
    getUnsplashPhotos().catch(console.error);
  }, [search]);

  function onClickChange(id) {
    if (imagesId.includes(id)) {
      alert(`Game is over! Your score is: ${score}`);
      setImagesId([]);
      setScore(0);
      setBestScore(bestScore > score ? bestScore : score);
    } else {
      setScore((score) => score + 1);
      setImagesId([...imagesId, id]);
      const shuffleImgs = shuffle([...urlsToDisplay]);
      setUrlsToDisplay(shuffleImgs);
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function searchingClick(){
    setSearch(inputValue);
  }

  return (
    <>
      <Header
        score={score}
        bestScore={bestScore}
        handleInputChange={handleInputChange}
        searchingClick={searchingClick}
      />
      <Cards toDisplay={urlsToDisplay} onClickChange={onClickChange} />
    </>
  );
}
