import { useState } from 'react';
import './App.css';
import data from './Quotes.json'




function App() {


  const randomPosition = (max) => {
    return Math.floor(Math.random() * max.length );
  }

  const Colors=[
    '#7D67FA','#5B6BDE','#70A2F5','#5BB0DE','#67EDFA','#FAAA8A','#DE887A','#F59497','#DE7AAF','#F88AFA'
  ]

  

  const [quote, setQuote] = useState(data.quotes[randomPosition(data.quotes)]);
  const [currentColor,setCurrentColor] = useState(Colors[randomPosition(Colors)])

   
  const handlerChangueQuoste = () => {
    setQuote(data.quotes[randomPosition(data.quotes)])
    setCurrentColor(Colors[randomPosition(Colors)])
  }

return (
  <div className="App">

     <div className="card"  style={{backgroundColor : currentColor}}>
         <h3>{quote.quote}</h3>
     <p>{quote.author}</p>
     <button className='button' onClick={handlerChangueQuoste}></button>
     </div>
   
  

  </div>
);
}

export default App;
