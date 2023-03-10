import React from 'react'

const Avatar = ({ bot }) => {
  return (
    <div style={{ background: 'rgba(128, 128, 128, 0.2)', width: '230px' }}>
            <img
              alt="oh no!"
              className="w-100"
              src={bot.avatar_url}
            />
        </div>
  )
}

export default Avatar