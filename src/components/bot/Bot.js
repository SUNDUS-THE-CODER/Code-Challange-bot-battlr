import React from 'react'
import Avatar from './Avatar'
import BotClass from './BotClass'
import Stats from './Stats'

const Bot = ({ bot, inMyArmy, demobilizeBot, enlistBot, deleteBot }) => {
  const handleEnlisting = (ev) => {
    ev.preventDefault();
    inMyArmy ? demobilizeBot(bot) : enlistBot(bot);
  }
  const handleDeleting = async (ev) => {
    ev.preventDefault();
    await fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" }
    });
    deleteBot(bot);
  }
  return (
    <div className='d-flex column bot'>
      <Avatar bot={bot} />
      <div className='p-2' style={{ width: '230px' }}>
        <h4><strong>{bot.name}<BotClass bot={bot} /></strong></h4>
        <span className="gray-text" style={{ wordBreak: 'break-all' }}>{bot.catchphrase}</span>
        <Stats bot={bot} />
        <div>
          <div className="d-flex center pt-3">
            <div className="btn-group " role="group">
              <button type="button" className="btn btn-primary" onClick={handleEnlisting}>{inMyArmy ? 'Dimobilize' : 'Enlist'}</button>
              <button type="button" className="btn btn-danger" onClick={handleDeleting}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bot