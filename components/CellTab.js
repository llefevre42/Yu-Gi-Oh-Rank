import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


const CellTab = styled.div`
font-family: "Metropolis";
font-weight: bold;
color: #efefef;
width: ${props => props.size || 100}; 
font-size: ${props => props.head ? (isMobile ? "14px" :"23px") : (isMobile? "17px" :"25px") }; 
text-align: center; 
margin-top: 10px;
margin-bottom: 10px; 
`;


export default CellTab 