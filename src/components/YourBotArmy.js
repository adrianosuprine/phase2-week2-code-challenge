import  BotCard  from "./BotCard";
function YourBotArmy({botarmy, releaseBot}){
    return (
        <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <div className="army">
          {botarmy.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              releaseBot={releaseBot}
            
            />
          ))}
        </div>
      </div>
    )
}

export default YourBotArmy;