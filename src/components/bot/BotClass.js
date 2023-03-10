import React from 'react'

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

const BotClass = ({ bot }) => {
  return (
    <i className={botTypeClasses[bot.bot_class]} />
  )
}

export default BotClass