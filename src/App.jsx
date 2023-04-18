import { useState,useEffect } from 'react';

import { AiOutlineTwitter } from 'react-icons/ai';

import './App.css';

function App() {
  const [quotes,setQuotes] = useState('');
  const [color,setColor] = useState('')
  const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', 
  '#e74c3c', '#9b59b6', '#FB6964', '#342224', 
  "#472E32", "#BDBB99", "#77B1A9", "#73A857"]

  const getQuote = () =>{
    fetch('https://type.fit/api/quotes')
      .then((res)=>res.json())
      .then((data)=>{
        let randomQuote = Math.floor(Math.random() * data.length )
        setQuotes(data[randomQuote])
        setColor(colors[Math.floor(Math.random() * colors.length)])
      })
  };

  useEffect(()=>{
    getQuote()
    setColor(colors[Math.floor(Math.random() * colors.length)])
  },[])

  return (
    <div id='wrapper' style={{backgroundColor : color}}>
      <div id="quote-box">
        <div className='quote-text'>
          <span style={{color : color}} id="text">
            “ {quotes.text}
          </span>
        </div>
        <div className='quote-author'>
          <span style={{color : color}} id="author">
            - {quotes.author}
          </span>
        </div>

        <div className='buttons' >
          <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
             target='_blank'
             rel='noopener noreferrer'
             style={{backgroundColor: color}}
             id='tweet-quote'
          >
            <AiOutlineTwitter />
          </a>

          <button onClick={getQuote}
                  id="new-quote"
                  style={{backgroundColor : color}}
        >
          New quote
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
