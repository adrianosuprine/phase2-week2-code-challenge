import  BotArmyCard  from "./BotArmyCard";
function YourBotArmy({botarmy, releaseBot,dischargeBot}){
    return (
        <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <div className="army">
          {botarmy.map((bot) => (
            <BotArmyCard
              key={bot.id}
              bot={bot}
              releaseBot={releaseBot}
              dischargeBot={dischargeBot}
            />
          ))}
        </div>
      </div>
    )
}

export default YourBotArmy;