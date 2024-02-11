import React, { useState, useEffect } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import './App.css';


function App() {
  const [bots,setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState ([]);

  useEffect(() => {
    fetch('http://localhost:8000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);
  
  // add bot to your boot army
  function enlistBot(bot){
    setYourBotArmy((prevArmy) => [...prevArmy, bot])
  }
  function releaseBot(botId){
    setYourBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  }

 

  return (
    <div className='App'>
      <h1>Welcome to Bot Battlr</h1>
      <p id='App'>The one and only spot in the known universe 
      <br/>where you can custom build your own Bot Army!</p>
    <div className='bot-container'>
      <BotCollection bots={bots} enlistBot={enlistBot}/> 
       <YourBotArmy botarmy={yourBotArmy} releaseBot={releaseBot}/> 
    </div>
   
   </div>
  );
}

export default App;
