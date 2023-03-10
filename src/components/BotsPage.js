import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  const botsToDisplay = bots.sort((a, b) => b.created_at - a.created_at);
  const enlistBot = (bot) => setBotArmy([...botArmy, bot]);
  const dischargeBot = (bot) => {
    const arr = botArmy;
    arr.splice(arr.findIndex((key) => key.id === bot.id), 1);
    setBotArmy([...arr]);
  };
  const deleteBot = (bot) => {
    const arr = bots;
    arr.splice(arr.findIndex((key) => key.id === bot.id), 1);
    const arr2 = botArmy;
    arr2.splice(arr2.findIndex((key) => key.id === bot.id), 1);
    setBots([...arr])
    setBotArmy([...arr2]);
  };
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
      <YourBotArmy botArmy={botArmy} dischargeBot={dischargeBot} deleteBot={deleteBot} />
      <BotCollection bots={botsToDisplay} botArmy={botArmy} enlistBot={enlistBot} dischargeBot={dischargeBot} deleteBot={deleteBot} />
    </div>
  )
}

export default BotsPage;
