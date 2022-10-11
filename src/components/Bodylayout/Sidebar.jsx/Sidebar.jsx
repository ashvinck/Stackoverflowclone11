import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';


const SidebarContainer = styled.div`
display: block;
text-align: left;
position: sticky;
color: rgb(35, 38, 41);
height: 100%;
width: auto;
margin: 0;
border-style: none;
border-color: rgb(35, 38, 41);
`;

const HomeContainer = styled.div`
padding-top: 20px;
padding-bottom: 10px;
`;

const Category = styled.div`
border-color: rgb(106, 115, 124);
font-size: 11px;
text-transform: uppercase;
text-align: left;
padding-left: 6px;
`;

const ListContainer = styled.ul`
align-items: center;
color: hsl(210, 8%, 35%);
margin-bottom: 12px;
margin-left: 0;
border-color: rgb(35, 38, 41);
list-style: none;
list-style-position: outside;
padding-inline-start: 0px;
`;

const ListItems = styled.li`
display: list-item;
list-style-position: outside;
position: relative;
border-color: rgb(35, 38, 41);
border-style: none;
`;



const StyledLink = styled(Link)`
display: block;
color: rgb(12, 13, 14);
text-align: left;
text-decoration-line: none ;
color: hsl(210, 8%, 35%);
box-sizing: border-box;
padding: 6px;
:hover{
    color: #000;
}
:focus{
background-color: hsl(210, 8%, 92%);
font-weight: 600;
color: #000;
border-right: 3px solid hsl(27, 90%, 55%);
}
`;

const TextContainer = styled.div`
    padding-left: 10px;
`;

const Text = styled.div`
display: inline-block;
padding-left: 5px;
`;

const Text1 = styled.div`
display: inline-block;
padding-left: 20px;
`;

const Sidebar = (props) => {
    return (
        <SidebarContainer>
            <HomeContainer>
                <StyledLink>
                    <TextContainer>
                        Home
                    </TextContainer>
                </StyledLink>
            </HomeContainer>

            <ListContainer>
                <TextContainer>
                    <Category>Public</Category>
                </TextContainer>

                <ListItems>
                    <StyledLink>
                        <TextContainer>
                            <FontAwesomeIcon icon={faEarthAmericas} />
                            <Text>
                                Questions
                            </Text>
                        </TextContainer>
                    </StyledLink>
                </ListItems>

                <ListItems>
                    <StyledLink>
                        <TextContainer>
                            <Text1>
                                Tags
                            </Text1>
                        </TextContainer>
                    </StyledLink>
                </ListItems>

                <ListItems>
                    <StyledLink>
                        <TextContainer>
                            <Text1>
                                Users
                            </Text1>
                        </TextContainer>
                    </StyledLink>
                </ListItems>
            </ListContainer>


            <ListContainer>
                <TextContainer>
                    <Category>Collectives</Category>
                </TextContainer>

                <ListItems>
                    <StyledLink>
                        <TextContainer>
                            <FontAwesomeIcon icon={faWpexplorer} />
                            <Text>
                                Explore Collectives
                            </Text>
                        </TextContainer>
                    </StyledLink>
                </ListItems>
            </ListContainer>

            <ListContainer>
                <TextContainer>
                    <Category>Find a Job</Category>
                </TextContainer>

                <ListItems>
                    <StyledLink>
                        <TextContainer>
                            <Text1>
                                Jobs
                            </Text1>
                        </TextContainer>
                    </StyledLink>
                </ListItems>

                <ListItems>
                    <StyledLink>
                        <TextContainer>
                            <Text1>
                                Companies
                            </Text1>
                        </TextContainer>
                    </StyledLink>
                </ListItems>
            </ListContainer>
        </SidebarContainer>
    )
}

export default Sidebar;





























// const SidebarContainer = styled.div`
// display: block;
// position: sticky;
// text-align: left;
// border-color: rgb(35, 38, 41);
// color: rgb(35, 38, 41);
// border-style: none;
// border-width: 0;
// border-image-width: 1;
// border-image-slice: 100%;
// box-sizing: border-box;
// height: 100%;
// width: auto;
// `;

// const SideListItems = styled.ol`
// border-color: rgb(35, 38, 41);
// border-style: none;
// border-width: 0;
// border-image-width: 1;
// border-image-slice: 100%;
// box-sizing: border-box;
// list-style: none;
// list-style-position: outside;
// margin-bottom: 12px;

// `;

// const Linklist = styled.li`
// display: list-item;
// list-style-position: outside;
// position: relative;
// border-color: rgb(35, 38, 41);
// border-style: none;
// border-width: 0;
// border-image-width: 1;
// border-image-slice: 100%;
// box-sizing: border-box;
// `;

// const StyledLink = styled(Link)`
// display: block;
// color: rgb(12, 13, 14);
// outline-color: rgb(229, 151, 0);
// outline-offset: 1px;
// text-align: left;
// text-decoration-line: none ;
// border-color: rgb(35, 38, 41);
// border-style: none;
// border-width: 0;
// border-image-width: 1;
// border-image-slice: 100%;
// box-sizing: border-box;
// `;

// const ListItemsContainer = styled.div`
// display: flex;
// align-items: center;
// `;

// const ListItems = styled.div`
// outline-color: rgb(229, 151, 0);
// outline-style: auto;
// outline-width: 1px;
// overflow-y: hidden;
// overflow-x: hidden;
// text-overflow: ellipsis;
// user-select: auto;
// `;

// const Text = styled.li`
// border-color: rgb(106, 115, 124);
// display: list-item;
// font-size: 11px;
// text-transform: uppercase;
// text-align: left;
// `;

// const Sidebar = () => {
//     return (
//         <SidebarContainer>
//             <nav>
//                 Home
//                 <SideListItems>
//                     <Linklist>
//                         <StyledLink>
//                             <ListItemsContainer>
//                                 <ListItems>
//                                     Home
//                                 </ListItems>
//                             </ListItemsContainer>
//                         </StyledLink>
//                     </Linklist>
//                     <SideListItems>
//                         <Text>Public</Text>
//                         <Linklist>
//                             <StyledLink>
//                                 Questions
//                             </StyledLink>
//                         </Linklist>
//                         <Linklist>
//                             <StyledLink>
//                                 <ListItemsContainer>
//                                     <ListItems>
//                                         Tags
//                                     </ListItems>
//                                 </ListItemsContainer>
//                             </StyledLink>
//                         </Linklist>
//                         <Linklist>
//                             <StyledLink>
//                                 <ListItemsContainer>
//                                     <ListItems>
//                                         Users
//                                     </ListItems>
//                                 </ListItemsContainer>
//                             </StyledLink>
//                         </Linklist>
//                         <Linklist>
//                             <StyledLink>
//                                 <ListItemsContainer>
//                                     <ListItems>
//                                         Companies
//                                     </ListItems>
//                                 </ListItemsContainer>
//                             </StyledLink>
//                         </Linklist>
//                         <Text>Collectives</Text>
//                         <Linklist>
//                             <StyledLink>
//                                 Explore Collectives
//                             </StyledLink>
//                         </Linklist>
//                     </SideListItems>
//                 </SideListItems>
//             </nav>
//         </SidebarContainer>
//     )
// }

// export default Sidebar;