function BotCard({bot, enlistBot}){
    function displayAvatar(){
        return (
        <img className="bot-avatar" src={bot.avatar_url} alt={bot.name}></img> 
        )
    }
    return (
        <div className="bot-card">
           
            <h3 onClick={displayAvatar}>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
            
            
    </div>
    )
}

export default BotCard;