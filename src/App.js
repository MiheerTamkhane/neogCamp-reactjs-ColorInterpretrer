import { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiLib = {
    "🔴": "Red",
    "🟠": "Orange",
    "🟡": "Yellow",
    "🟢": "Green",
    "🔵": "Blue",
    "🟣": "Violet",
    "🟤": "Brown",
    "⚫": "Black",
    "⚪": "White"
  };

  const [meaning, setMeaning] = useState("");

  function emojiCheckHandler(e) {
    let userInput = e.target.value;
    let meaning = emojiLib[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiLib[emoji];
    setMeaning(meaning);
  }
  const emojis = Object.keys(emojiLib);

  return (
    <div className="App">
      <h1>Colour Interpreter</h1>
      <input onChange={emojiCheckHandler} />
      <div className="outputDiv">
        <h1>{meaning}</h1>
      </div>
      <h2> Colours </h2>
      {emojis.map((emoji) => {
        return (
          <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </li>
        );
      })}
    </div>
  );
}
