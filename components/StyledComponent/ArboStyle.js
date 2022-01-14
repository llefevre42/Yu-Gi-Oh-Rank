import styled from 'styled-components';


const ArboStyle = styled.div`
position:absolute;
z-index: 1;
border-radius: 30px; 
width: 15vw;
margin-top: 70px; 
margin-left: 10px; 
margin-bottom: 10px; 
background-color: #22171c;
border: 3px solid; 
border-color: #0d8d40;
overflow: hidden;

.ArboText {
    font-size: 30px;
    text-align: center; 
    font-family: "Phosphate";
    color: #27f32c;
    margin-top: 20px; 
    margin-bottom: 20px; 
  }
.ArboLine{
    border-bottom: 3px solid; 
    border-bottom-color: #0d8d40; 
    width: 80%;
    align-self: center;
}

@media screen and (max-width: 800px) {
    border: 2px solid; 
    border-color: #0d8d40;
    margin-top: 40px; 
    width: 150px;
    }
`;


export default ArboStyle 