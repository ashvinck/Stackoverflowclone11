import React from 'react'
import styled from 'styled-components';
import overstackflowImg from '../../assets/images/stackoverflow.png';


const LogoWrapper = styled.div`
display: flex;
align-items: center;
width: 165px;
height: 30px;
`;

const LogoLink = styled.a`
display: flex;
align-items: center;
text-decoration: none;
color: inherit;
font-size: inherit;
`;

const LogoImg = styled.div`
img {
    width:110%;
    height: 110%;
    margin-top : 4px;
}
`;

const LogoText = styled.div`
font-size: 19px;
font-weight: 400;
color: rgb(35, 38, 41);
`;

const Logo = (props) => {
    return (
        <LogoWrapper>
            <LogoLink href='/home'>
                <LogoImg><img src={overstackflowImg} alt="stackOverflow" /></LogoImg>
                <LogoText>stack<b>overflow</b></LogoText>
            </LogoLink>
        </LogoWrapper>
    )
}

export default Logo;