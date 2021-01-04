import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background: #536878;
  height: 90vh;
  justify-content: center;
`;

export const LoginBox = styled.div`
  background: #292b2c;
  text-align: center;
  width: 50vw;
  border: 1px solid #5bc0de;
  border-radius: 5px;
  margin: 0px auto;
  padding: 20px;
`;

export const Heading = styled.h1`
  color: white;
`;

export const SubHeading = styled.h2`
  color: white;
`;

export const OnboardingContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: #536878;
  height: 90vh;
  align-items: center;
  padding: 50px 0px;
`;

export const Message = styled.div`
  text-align: center;
  color: white;
  margin: 0px auto;
  padding: 10px 20px;
  width: 50vw;
  border: 1px solid #5bc0de
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px;
`