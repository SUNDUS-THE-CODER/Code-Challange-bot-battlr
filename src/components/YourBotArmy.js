import React from "react";
import Bot from "./bot/Bot";

function YourBotArmy({ botArmy, demobilizeBot, deleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
      <div className="d-flex center wrap gap mt-2">
        {botArmy.map((key) => (
          <Bot 
            key={key.id} 
            bot={key} 
            inMyArmy={botArmy.find(innerKey => innerKey.id === key.id)} 
            demobilizeBot={demobilizeBot}
            deleteBot={deleteBot}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
