import BotCard  from "./BotCard";

function BotCollection({bots,enlistBot}){
    return (
        <div className="bot-collection">
            <h2>All Bots</h2>
            <div className="bots">
                {bots.map((bot =>
                    <BotCard key={bot.id} bot={bot} enlistBot={enlistBot}/>
                    ))}
            </div>
        </div>
    );
}

export default BotCollection;