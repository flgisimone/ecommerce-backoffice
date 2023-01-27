import styled from "styled-components";
import { useState } from "react";
import Title from "../Title/Title";

const Home = () => {

    const Main = styled.div`
        width: 100%;
        border-radius: 0.8rem;
        padding: 1rem;      
     `

     const MenuVoiceContainer = styled.div`
        width: 100%;
        border-radius: 0.8rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem; 
    `

    const TypeVoice = styled.div`
    position: relative;
    width: 15rem;
    height: 10rem;
    border-radius: 0.8rem;
    background-color: white;
    box-shadow: 0px 0px 10px;
    `

    const Voice = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        border-radius: 0.8rem;
        background-color: white;
        
    `

  return (
    <Main>
        <Title title="Home" />
        <MenuVoiceContainer>
          <TypeVoice>
            <Voice>Categories</Voice>
          </TypeVoice>
          <TypeVoice>
            <Voice>Products</Voice>
          </TypeVoice>
        </MenuVoiceContainer>

    </Main>
  )
}

export default Home