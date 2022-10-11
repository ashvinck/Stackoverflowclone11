import { faStackExchange } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faInbox, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Avatar from 'react-avatar';
import styled from 'styled-components'


const ActionButtonContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
/* margin-bottom: 10px;
margin-top: 10px; */
padding: 8px;
line-height: 17px;
box-sizing: border-box;
`;

const LinksWrapper = styled.ul`
margin: 0;
padding: 0;
display: flex;
height: 100%;
line-height: inherit;
list-style: none;
box-sizing: border-box;
`;

const LinkItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
box-sizing: border-box;
/* margin-left: 10px;
margin-right: 10px; */
color: rgb(75, 78, 82);
`;

const Link = styled.a`
text-decoration: none;
color: inherit;
font-size: inherit;
margin-left: 12px;
margin-left: 8px;
margin-right: 8px;
box-sizing: border-box;

:hover{
    background-color: #ddd;
    /* border-radius: 20px; */
    padding: 8px;
} 
`;




const ActionButtons = () => {
  return (
    <ActionButtonContainer>
      <Avatar githubHandle='sitebase' size="24" />
      <LinksWrapper>
        <LinkItem>
          <Link href="/inbox"> <FontAwesomeIcon icon={faInbox} /></Link>
          <Link href="/achievements"> <FontAwesomeIcon icon={faTrophy} /></Link>
          <Link href="/helo"> <FontAwesomeIcon icon={faCircleQuestion} /></Link>
          <Link href="/stackexchange"> <FontAwesomeIcon icon={faStackExchange} /></Link>
        </LinkItem>
      </LinksWrapper>
    </ActionButtonContainer>

  )
}

export default ActionButtons;