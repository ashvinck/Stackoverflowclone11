import React from 'react'
import styled from 'styled-components';
import Sidebar from './Sidebar.jsx/Sidebar';

const BodyLayoutContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 1 auto;
max-width: 1264px;
flex : 1 0 auto;
text-align: left;
background-clip: border-box;
border-color: rgb(35, 38, 41);
border-image-slice: 100%;
border-image-width: 1;
background-attachment: scroll;
`;

const SidebarLayout = styled.div`
display: block;
position: relative;
text-align: left;
width: 164px;
z-index: 1000;
border-color: rgb(35, 38, 41);
box-shadow: rgba(12, 13, 14, 0.5) 0 0  0 0;
flex-shrink: 0;
font-size: 13px;
font-weight: 400;
line-height: 17px;
`;

const MainLayout = styled.div`
display: block;
color: rgb(35, 38, 41);
font-size: 13px;
margin-top: 3px;
box-shadow: rgba(12, 13, 14, 0.5) 0 0  0 0;
background-color: rgb(255, 255,255);
border-top-color:rgb(35, 38, 41); ;
border-bottom-color: rgb(214, 217, 220) ;
border-left-color: rgb(214, 217, 220) ;
border-right-color: rgb(214, 217, 220) ;
border-bottom-style: solid;
width: 1264px;
`;



const BodyLayout = () => {
    return (
        <BodyLayoutContainer>
            <SidebarLayout>
                <Sidebar />
            </SidebarLayout>
            <MainLayout>
                Right
            </MainLayout>
        </BodyLayoutContainer>
    )
}

export default BodyLayout;