/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Spotify Clone;
*/
import React from 'react'

import './Body.css'
import { useDataLayerValue } from '../../Config/DataLayer'
import Header from '../../components/Header'
import SongRow from '../../components/SongRow';
import ImgDisco from '../../assets/disco.png'

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

function Body({ spotify }) {
    const [{ discover_weekly }, ] = useDataLayerValue()

    return (
        <div className="body" >
            <Header spotify={spotify} />

            <div className="body__info">
                <img 
                    src={discover_weekly?.images[0]?.url || ImgDisco}
                    alt="Silvanei Martins"
                />
                <div className="body__infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Silvanei Martins</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon className="body__Favorite" fontSi="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
