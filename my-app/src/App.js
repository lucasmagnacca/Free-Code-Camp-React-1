import { Button } from 'bootstrap';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
const [quoteInfo, setQuoteInfo] = useState({})

  useEffect(() =>{
getQuote()
  }, [])
  const getQuote = () =>{
    fetch("https://api.quotable.io/random").then((response) => {
      return response.json()
    }).then((data)=>{
      setQuoteInfo({
        text: data.content,
        author: data.author
      })
      console.log(data)
    })
  }
  return (
    <div className="App">
      <div className="container" id="quote-box">
      <div className="row">
        <div className="col center-block">
          <p id="text">{quoteInfo.text}</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <div className="danger" id="author">{quoteInfo.author}</div>
        </div>
      </div>
      <div className="row ">
        <div className="col "  >
          <button id="new-quote" onClick={getQuote}>New quote</button>
        </div>
        <div className="col" >
            <a  id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text}>Post to Twitter</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
