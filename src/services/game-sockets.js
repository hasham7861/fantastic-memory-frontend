import io from 'socket.io-client'
import { isServerUp } from './rest'

const envUri = import.meta.env.VITE_API_URL

export const mySocket = io(envUri + "/game-nsp")

export const initiateGameSockets = isServerUp(() => {
    mySocket.on('connect', function () {
        return "initiated all socket"
    })

    // mySocket.on('disconnect', function (){
    //     mySocket.emit("disconnect",{msg:"close connection"})
    // })
    //eslint-disable-next-line
    mySocket.on('player-id', function (msg) { console.log(msg) })

})

export const joinGame = (gameId, playerIndexStart) => {
    mySocket.emit("join-game-lobby", { gameId, playerIndexStart })
}

export const closeGame = (gameId) => {
    mySocket.emit("close-game", gameId)
}

export const checkIsMyTurn = (isMyTurnStateChangeCB) =>{
    mySocket.on("is-my-turn", isMyTurn => {
        isMyTurnStateChangeCB(isMyTurn)
    })
}
