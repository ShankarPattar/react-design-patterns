import React from 'react'
import styled from 'styled-components';

const ToggleWrapper = styled.div`
    width:50px;
    height:25px;
    min-width:50px;
    border-radius:25px;
    border:1px solid #efe;
    margin: auto ;
    display:flex;
    background-image: linear-gradient(to bottom, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
`;

const Notch = styled.div`
    width:20px;
    height:20px;
    border:1px solid #efe;
    margin-top:1px;
    background:white;
    border-radius:50%;
    transform: translate(${p => p.isActive ? '26px': '1px'}) 0.1s linear;
    `;

export function Toggle(isActive, onToggle){
    return(
        <ToggleWrapper onClick = {onToggle}>
            <Notch isActive={isActive}/>
        </ToggleWrapper>
    )
}