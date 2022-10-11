import React from 'react'
import styled from 'styled-components';

const NavLinksContainer = styled.div`
height: 100%;
display: flex;
align-items: center;
box-sizing: border-box;
`;

const LinksWrapper = styled.ul`
margin: 0;
padding: 0;
display: flex;
height: 100%;
list-style: none;
box-sizing: border-box;
`;

const LinkItem = styled.li`
height: 100%;
padding: 0 1.1em;
margin-top: 7px;
color: rgb(35, 38, 41);
font-size: 14px;
font-weight: 400;
align-items: center;
justify-content: center;
box-sizing: border-box;
`;

const Link = styled.a`
text-decoration: none;
color: inherit;
font-size: inherit;
margin-left: 12px;
box-sizing: border-box;
:hover{
    background-color: #ddd;
    border-radius: 20px;
    padding: 5px;
}
`;

const Navlinks = (props) => {
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem>
                    {/* <Link href='#'>About</Link> */}
                    <Link href='#'>Products</Link>
                    {/* <Link href='#'>For Teams</Link> */}
                </LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    )
}

export default Navlinks;