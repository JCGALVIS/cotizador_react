import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
`;

const TexttoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TexttoHeader>{titulo}</TexttoHeader>
        </ContenedorHeader>
    );
}
 
export default Header;