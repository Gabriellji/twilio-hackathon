import React from 'react'
import styled from 'styled-components';


export default function MyEvents() {
    return (
        <MainContainer>
            <TitleContainer>  
                <PageTitle>
                    <p>My events</p>
                </PageTitle>
            </TitleContainer>
            <MyEventsListContainer>
                </MyEventsListContainer>
            <button>Back to map</button>
        </MainContainer>
    )
}
const MainContainer = styled.section`    
    width: 100vw;
    height: 100vh;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(219,250,246,1) 0%, rgba(35,118,205,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;

        button{
            width: 55%;
            height: 7%;
            border: 2px solid white;
            background-color: #7DC81F;
            position: relative;
            top: 25%;
            border-radius: 15px;
            color: white;
            font-family: 'Nunito', sans-serif;
            font-size: 1.8rem;
            box-shadow: 3px 3px 5px grey;
        }
    `

const TitleContainer = styled.div`
    width: 60%;
    height: 10%;
    border: 3px solid #7DC81F;
    position: relative;
    top: 5%;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    `

const PageTitle = styled.div`
    position: relative;
    padding: 10px;
    font-family: 'Nunito', sans-serif;
    font-size: 2.3rem;
    color: white;
    
`
const MyEventsListContainer = styled.section`
    position: relative;
    width: 90%;
    height: 50%;
    border: 2px solid #7DC81F;
    border-radius: 15px;
    position: relative;
    background-color: white;
    top: 10%;
    
    `
// const Glass = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     position: relative;
//     border-radius: 15px;
//     background-color: #e6e6e6;
//     opacity: 0.1;

// `