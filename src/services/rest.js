import axios from 'axios'

const envUri = import.meta.env.VITE_API_URL
const isServerUp = async (cb) => {
    return axios.get(envUri + "/status").then(() => cb()).catch(() => 
    //eslint-disable-next-line
    console.log("server_status: down"))
}

const getGameToken = async () => {
    return axios.get(envUri + "/game/generate_game_id").then(data => data).catch(() => {
        return null
    })
}

const isValidGameId = async (gameId) => {
    return axios.get(envUri + "/game/is_valid_game_id?inputGameId=" + gameId).then(data => data).catch(() => null)
}

export {
    isServerUp,
    getGameToken,
    isValidGameId
}