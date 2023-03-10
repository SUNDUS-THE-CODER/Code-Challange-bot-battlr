import React from "react";
import Bot from "./bot/Bot";

function BotCollection({ bots, enlistBot, demobilizeBot, botArmy, deleteBot }) {
  return (
    <div className="d-flex center wrap gap mt-2">
      {bots.map((key) => (
        <Bot
          key={key.id} 
          bot={key} 
          inMyArmy={botArmy.find(innerKey => innerKey.id === key.id)} 
          enlistBot={enlistBot} 
          demobilizeBot={demobilizeBot}
          deleteBot={deleteBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;
