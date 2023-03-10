import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);

  const botsToDisplay = bots.sort((a, b) => b.created_at - a.created_at);
  useEffect(() => {
    const fetchBots = async () => {
      try {
        let fetchedBots = await fetch("http://localhost:8002/bots");
        fetchedBots = await fetchedBots.json();
        setBots(fetchedBots);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchBots();
  }, [])
  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={botsToDisplay} />
    </div>
  )
}

export default BotsPage;
