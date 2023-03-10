import React from 'react'
import Avatar from './Avatar'
import BotClass from './BotClass'
import Stats from './Stats'

const Bot = ({ bot }) => {
  return (
    <div className='d-flex column bot'>
      <Avatar bot={bot} />
      <div className='p-2' style={{ width: '230px' }}>
        <h4><strong>{bot.name}<BotClass bot={bot} /></strong></h4>
        <span className="gray-text" style={{ wordBreak: 'break-all' }}>{bot.catchphrase}</span>
        <Stats bot={bot} />
      </div>
    </div>
  )
}

export default Bot