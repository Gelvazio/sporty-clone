import React from 'react'
import './Player.css'

import Siderbar from '../../components/Sidebar'
import Body from '../../pages/Body'
import Footer from '../../components/Footer'

function Player({ spotify }) {
    return (
        <div className="player" >
            <div className="player__body">
                <Siderbar />
                <Body spotify={spotify} />
            </div>

            <Footer />
        </div>
    )
}

export default Player
