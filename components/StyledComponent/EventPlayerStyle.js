import styled from 'styled-components';

const EventPlayerStyle = styled.div`
border: 3px solid; 
border-color: #0d8d40;
overflow: hidden;
border-radius: 30px;
display: flex; 
flex-direction: column;
margin-top: 10px;
margin-left: 10px;
margin-right: 30px;
margin-bottom: 10px;

.Container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px
}

.ContainerHead{
    display: flex; 
    flex-direction: row; 
    margin: 10px
}
.Text{
    font-size: 20px;
    text-align: left;
    font-family: "Metropolis";
    font-weight: bold;
    color: #eaeaea;
}

.DeckList{
    width: 45%; 
    border: "2px solid"; 
    border-color: #0d8d40;
     margin: 10px;
}
@media screen and (max-width: 800px) {
    font-size: ${props => props.head ? "14px" : "17px"}; 
    .Container{
        flex-direction: column;
    }
    .ContainerHead{
        flex-direction: column;
}
    .DeckList{
        width: 90%;
        margin : auto;
    }
    }
`;

export default EventPlayerStyle 