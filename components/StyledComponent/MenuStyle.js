
import styled from 'styled-components';

const MenuStyle = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-left: 10px;
    border: 3px solid; 
    border-color: #0d8d40;
    overflow: hidden;
    border-radius: 20px;
    @media screen and (max-width: 800px) {
        width: 25px;
        height: 25px;
        border-radius: 10px;
        border: 2px solid; 
        border-color: #0d8d40;
    }
`;

export default MenuStyle