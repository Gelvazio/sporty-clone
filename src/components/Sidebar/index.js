/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Spotify Clone;
*/
import React from 'react'
import './Sidebar.css'

import { useDataLayerValue } from '../../Config/DataLayer'

import SidebarOptions from '../SidebarOptions'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

function Siderbar() {
    const [{ playlists }, ] = useDataLayerValue();

    return (
        <div className="siderbar" >
            <img
                className="siderbar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />

            <SidebarOptions Icon={HomeIcon} title='Home' />
            <SidebarOptions Icon={SearchIcon} title='Procurar' />
            <SidebarOptions Icon={LibraryMusicIcon} title='Sua Biblioteca' />

            <br />
            <strong className="sidebar__title">
                PLAYLISTS
            </strong>
            <hr />

            <div className="sidebar__playlist">
                {playlists?.items?.map(playlist => (
                    <SidebarOptions
                        title={playlist.name}
                    />
                ))}
            </div>

        </div>
    )
}

export default Siderbar
