import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
`;

export const TabMenuLeft = styled.div`
    flex: 1;
      margin-right: 20px;
    @media screen and (max-width: 800px) {
      margin-right: 0px;
    }
`;


export const TabMenu = styled.div`
    flex: 1;
`;
