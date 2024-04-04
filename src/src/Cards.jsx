import "../styles/Cards.css";

export default function Cards({ toDisplay, onClickChange }) {
  return (
    <div className="images">
      {toDisplay.map((image) => (
        <img className="image" key={image.id} src={image.urls.small} onClick={() => onClickChange(image.id)}></img>
      ))}
    </div>
  );
}
