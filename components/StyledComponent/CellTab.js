import styled from 'styled-components';


const CellTab = styled.div`
font-family: "Metropolis";
font-weight: bold;
color: #efefef;
width: ${props => props.size || 100}; 
font-size: ${props => props.head ? "23px" : "25px" }; 
text-align: center; 
margin-top: 10px;
margin-bottom: 10px; 

@media screen and (max-width: 800px) {
    font-size: ${props => props.head ? "14px" : "17px" }; 
    }
`;


export default CellTab 