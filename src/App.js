/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Spotify Clone;
*/
import React, { useEffect } from 'react'

import Login from '../src/pages/Login'
import Player from '../src/pages/Player'

import { useDataLayerValue } from '../src/Config/DataLayer'
import { getTokenFromUrl } from '../src/Config/Spotify'
import SpotifyWebApi from 'spotify-web-api-js'

import './App.css'

const spotify = new SpotifyWebApi()

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue()

    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""
        const _token = hash.access_token

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })

            spotify.setAccessToken(_token)

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                })
            })

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                })
            })

            spotify.getPlaylist("37i9dQZEVXcUuay7elVT7S").then((response) => 
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discover_weekly: response,
                })
            )
        }

        console.log('EU TENHO UM TOKEN >>> 👉', token)
    }, [token, dispatch])

    console.log('🙎', user)
    console.log('👷', token)

    return (
        <div className="App">
            {
                token ? (<Player spotify={spotify} />) : (<Login />)
            }
        </div>
    )
}

export default App
