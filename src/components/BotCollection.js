import React from "react";
import Bot from "./bot/Bot";

function BotCollection({ bots }) {
  return (
    <div className="d-flex center wrap gap mt-2">
        {bots.map((key) => (
          <Bot key={key.id} bot={key} />
        ))}
    </div>
  );
}

export default BotCollection;
