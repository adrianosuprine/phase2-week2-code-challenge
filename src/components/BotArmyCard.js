function BotArmyCard({bot, releaseBot, dischargeBot}){
    // function displayAvatar(){
    //     return (
    //     <img className="bot-avatar" src={bot.avatar_url} alt={bot.name}></img> 
    //     )
    // }
    return (
        <div className="bot-card">
           <img className="bot-avatar" src={bot.avatar_url} alt={bot.name}></img> 
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => releaseBot(bot.id)}>Release</button>
            <button onClick={() =>dischargeBot(bot.id)}>Discharge</button>
            
    </div>
    )
}

export default BotArmyCard;