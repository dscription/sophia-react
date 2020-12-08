import styled from 'styled-components';

export const CardColumn = styled.div`
  width: '200px';
  height: 90%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 20px 20px;
  box-sizing: border-box;
`;

export const CardBody = styled.div`
  padding: 10px;
`;

export const Header = styled.div`
  background-color: grey;
  height: 40px;
  border: 1px solid black;
  ${'' /* border-radius: 5px; */}
`;
