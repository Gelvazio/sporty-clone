/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Spotify Clone;
*/
import React from 'react'
import ReactDOM from 'react-dom'

import { DataLayer } from '../src/Config/DataLayer'
import reducer, { initialState } from '../src/Config/reducer'

import App from './App'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <DataLayer initialState={initialState} reducer={reducer}>
            <App />
        </DataLayer>
    </React.StrictMode>,
    document.getElementById('root')
)
