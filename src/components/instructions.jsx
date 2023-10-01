import React from 'react'
import styled from 'styled-components'
// import YouTubeVideo from './youtubeVideo'

function Instructions() {
    return (
        <InstructionsContainer>
            <VideoWrapper>
                <YouTubeVideo videoId={"-IKaocZrjrc"} width={"500"} height={"315"}/>
            </VideoWrapper>
            <DescriptionsWrapper>
                Fantastic Memory is a multiplayer drawing guessing game with two main modes: Host Game (create a game and invite friends with your unique gameId) and Join Game (enter a friend's gameId to join their game).
            </DescriptionsWrapper>
        </InstructionsContainer>
    )
}

const InstructionsContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: Column;
    color: blue;
`
const VideoWrapper = styled.div`
    margin-top:20px;
`
const DescriptionsWrapper = styled.div`
    width:460px;
    font-family: Helvetica, Arial, sans-serif;
    color:#3D2175;
    font-size:1.1rem;
    padding:10px 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: #f1def1;
    border-radius:8px;

    @media(max-width: 600px) {
        width:400px;
    }
`

export default Instructions