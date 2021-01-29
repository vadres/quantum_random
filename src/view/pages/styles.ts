import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 720px) {
    flex-direction: column;
    transform: scale(0.8);
  }
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #444;
  margin-bottom: 10px;
`
