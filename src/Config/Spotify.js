/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Spotify Clone;
*/
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndPoint = "https://accounts.spotify.com/authorize"

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = process.env.CLIEND_ID
const redirectUri = "http://localhost:3000/"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

//getTokenFromResponse -> getTokenFromUrl
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            
            return initial;
        }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;