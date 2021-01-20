import styled, { keyframes } from 'styled-components';

const flop = keyframes`
  0%{
    transform: scale(0)
  }
  70%{
    transform: scale(1.2)
  }
  85%{
    transform: scale(0.6)
  }
  100%{
    transform: scale(1)
  }
`; 

export const GameSC = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

export const GameItemContainer = styled.div`
  margin-right: 5px;
  width: 50px;
  height: 50px;
`

export const GameItemSC = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 40px;
  text-align: center;
  line-height: 50px;
  animation: ${flop} 0.5s ease-out 1;
`



