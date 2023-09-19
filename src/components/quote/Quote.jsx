import React,{useState,useEffect} from 'react'
import "../quote/quote.css"
const Quote = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
      getquote()
    }, []);

  const getquote = () =>{
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          let dataQuotes = data.quotes;
          let randomNum = Math.floor(Math.random() * dataQuotes.length);
          let randomQuote = dataQuotes[randomNum];
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
        })
  }

  const handleClick = () => {
    getquote();
  }

  return (
    <div className='quotebox'>

    <div className='quote'>
    <div ><p className='saying'>"{quote}"</p></div>
    <div className='qotaut'><p className='saying'>{author}</p></div>
</div>
<div className='qot2'>

    <button className='btnqot' onClick={handleClick}><p>New Quote</p></button>
    </div>
 

         </div>

  )
}

export default Quote