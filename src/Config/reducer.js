/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Spotify Clone;
*/
export const initialState = {
    user: null,
    token: null,
    // REMOVER NO FINAL DO DESENVOLVIMENTO
    // token: 'BQBT__R3frEp_-BxnaFjLdCm0DzZmp_radOcy9lXddapv9kY0IH8cTMyVIOa5aQk-FfJcpurdzpwxH-pHgpSrtVdXJKb9izW6NHgF7KFM-MBe0iMss0MHRwW1eQ3-l_wg8pY4Hs98LYCsO1KpwgX1qEMLeab54iXJLI',
    playlists: [],
    playing: false,
    item: null,
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            }

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            }

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        default:
            return state
    }
}

export default reducer