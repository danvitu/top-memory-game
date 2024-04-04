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

  useEffect(() => {
    const getUnsplashPhotos = async () => {
      const apiKey = "aKJVxHB-vz92X_JoKbX8LyqW8_2drqZOvGUTOXYsr28";
      const searchQuery = "cats";
      const imgNum = 8;
      const orientation = "landscape";
      const data = await fetch(
        `http://api.unsplash.com/search/photos?client_id=${apiKey}&query=${searchQuery}&per_page=${imgNum}&orientation=${orientation}`
      );
      const dataImgs = await data.json();
      setUrlsToDisplay(dataImgs.results);
    };
    getUnsplashPhotos().catch(console.error);
  }, []);

  function onClickChange(id) {
    if (imagesId.includes(id)) {
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

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Cards toDisplay={urlsToDisplay} onClickChange={onClickChange} />
    </>
  );
}
