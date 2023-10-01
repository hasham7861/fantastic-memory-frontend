import React from 'react'
import styled from 'styled-components'
import YouTubeVideo from './youtubeVideo'

function Instructions() {
    return (
        <InstructionsContainer>
            {/* <VideoWrapper>
                <YouTubeVideo videoId={"-IKaocZrjrc"} />
            </VideoWrapper> */}
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
    background-color: #f1def1;
    border-radius:20px;
`
const VideoWrapper = styled.div`
    margin-top:20px;
`
const DescriptionsWrapper = styled.div`
    width:500px;
    font-family: Helvetica, Arial, sans-serif;
    color:#3D2175;
    font-size:1.1rem;
    padding:40px 50px;
`

export default Instructions