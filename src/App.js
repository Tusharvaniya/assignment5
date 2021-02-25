import "./App.css";
import { Fragment, useState, useEffect } from "react";

function App() {
  let [char_counter, changeCharCount] = useState(0);
  let [word_counter, changeWordCount] = useState(0);
  let [lastWord, ab] = useState(null);
  let [history, setHistory] = useState([]);

  const i_will_count = (event) => {
    const text = event.target.value;
    const characters = text.replaceAll(" ", "").length;
    changeCharCount((char_counter = characters));

    let words = null;
    if (characters > 0) {
      words = text.trim().split(/\s+/);
      changeWordCount((word_counter = words.length));
      ab((lastWord = words[words.length - 2]));
    }
  };

  useEffect(() => {
    if (lastWord) {
      let newarr = [...history];
      newarr.push(lastWord);
      setHistory((history = [...newarr]));
    }
    ab((lastWord = null));
  }, [word_counter]);

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">Character and Word counter</header>
      </div>
      <div className="Container">
        <div>
          <textarea
            className="textbox"
            name="text1"
            id="text1"
            onChange={(event) => i_will_count(event)}
          />
        </div>
        <div className="charCounter">
          Total Characters : <strong>{char_counter}</strong>
        </div>
        <div className="wordCounter">
          Total Words : <strong>{word_counter}</strong>
        </div>
        <div>Your word history below :</div>
        <div>
          <ul className="historyWords">
            {history.map((h) => {
              return <li>{h}</li>;
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
