import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../responsive';

const SearchContainer = styled.div`
   display: flex;
   background-color: #fff;
   border: 1px solid rgba(112, 112, 112, 0.233);
   margin: 10px;
   padding: 8px;
   border-radius: 4px;
   width: 100%;
   
   :focus-within {
    border-color: #66afe9;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    outline: 0 none;
}
`;

const SearchIcon = styled.div`
display: flex;
align-items: center;
margin: 1px;
color: rgb(108, 109, 110);
`;

const Form = styled.form`
display: flex;
align-items: flex-start;
width: 100%;


`;
const Input = styled.input`
display: flex;
flex-direction: row;
border: none;
outline: none;
margin-left: 10px;
margin-top: 2px;
width: 100%;

`;

const Searchbar = (props) => {
    return (
        <SearchContainer>
            <Form>
                <SearchIcon>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>
                <Input
                    type="text" placeholder="Search.."
                />
            </Form>
        </SearchContainer>
    )
}

export default Searchbar;