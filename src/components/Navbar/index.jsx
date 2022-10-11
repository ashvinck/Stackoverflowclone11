import React from "react";
import styled from "styled-components";
import Logo from "../logo";
import Navlinks from "./Left/navlinks";
import Searchbar from "./Middle/Searchbar";
// import Accessibility from "./Right/Accessibility";
import ActionButtons from "./Right/Actionbuttons";



const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;
width: 100%;
height: 50px;
box-shadow: 0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05);
`;


const NavBarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
line-height: 17px;
box-sizing: border-box;
`;

const LeftSection = styled.div`
display: flex;
box-sizing: border-box;
`;

const MiddleSection = styled.div`
display: flex;
flex: 2;
box-sizing: border-box;

`;

const RightSection = styled.div`
display: flex;
box-sizing: border-box;

`;


const Navbar = (props) => {
    return (
        <div>
            <Header>
                <NavBarContainer>
                    <LeftSection>
                        <Logo />
                        <Navlinks />
                    </LeftSection>
                    <MiddleSection>
                        <Searchbar />
                    </MiddleSection>
                    <RightSection>
                        {/* <Accessibility /> */}
                        <ActionButtons />
                    </RightSection>
                </NavBarContainer>
            </Header>
        </div>
    )
}

export default Navbar;