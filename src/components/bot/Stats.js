import React from 'react'

const Stats = ({ bot }) => {
    return (
        <div className="d-flex justift-content-evenly w-100 pt-2" style={{ borderTop: '1px solid rgba(128, 128, 128, 0.5)' }}>
            <div className="d-flex" style={{ flex: '1' }}>
                <i className="icon large red heartbeat" />
                <strong className="gray-text">{bot.health}</strong>
            </div>
            <div className="d-flex" style={{ flex: '1' }}>
                <i className="icon large yellow lightning" />
                <strong className="gray-text">{bot.damage}</strong>
            </div>
            <div className="d-flex" style={{ flex: '1' }}>
                <i className="icon large blue shield" />
                <strong className="gray-text">{bot.armor}</strong>
            </div>
        </div>
    )
}

export default Stats