import styled from 'styled-components';

const EventStyle = styled.div`

.MobileContainer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 10px;
}
.Photo{
    width: 150px;
    height: 200px; 
    margin-top: 10px;
    border: 3px solid; 
    border-color: #0d8d40;
    overflow: hidden;
}

@media screen and (max-width: 800px) {
    .MobileContainer{
        flex-direction: column;
    }
    .Photo{
        margin: auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    }
`;

export default EventStyle 