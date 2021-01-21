import styled, { keyframes } from 'styled-components';

const flop = keyframes`
  0%{
    transform: scale(0)
  }
  
  100%{
    transform: scale(1)
  }
`; 

export const GameSC = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 360px;
`

export const GameItemContainer = styled.div`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`

export const GameItemSC = styled.div`
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  animation: ${flop} 0.3s ease-out 1;
  animation-fill-mode: forwards;
  font-size: 17px;
`



