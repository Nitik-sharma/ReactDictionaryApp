import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { useDispatch } from "react-redux";
import addToHistory from "../redux/action/DicAction";
import axios from "axios";
import "./Home.css";
import img from '../img/XOsX.gif';

function Home() {
  const [word, setWord] = useState("");
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [his, setHis] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Item:", item);
    console.log("History:", his);
  }, [item, his]);

  const handle = async () => {
    try {
      setError(null); // Reset the error state
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setLoading(false);
      setItem(res.data[0]);
      setHis((prevHis) => [...prevHis, res.data[0]]);
      dispatch(addToHistory({ word, definition: res.data[0] }));
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="search-box">
          <input
            placeholder="search....."
            type="text"
            onChange={(e) => setWord(e.target.value)}
            value={word}
          />
          <button onClick={handle}>Search</button>
        </div>
        <div className="data">
          {item && (
            <div className="data-top">
              <h2>{item.word}</h2>
              <p>{item.phonetic}</p>
              {item.phonetics.map((element, index) => (
                <div key={index}>
                  <audio src={element.audio} controls  className="audio"/>
                  <p>{element.text}</p>
                </div>
              ))}

              {item.meanings.map((ele, index) => (
                <div key={index}>
                  <h2>{ele.partOfSpeech}</h2>
                  {ele.definitions.map((definition, subIndex) => (
                    <p key={subIndex}>{definition.definition}</p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {error && (
            <div>
              <h1>{error.message}</h1>
            </div>
          )}

          {
            loading ?<>
             <h1 className="loading-heading">Type a Word let me go plz.......</h1>
             <img src={img} className="loading-img"/>
            </>:""
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
