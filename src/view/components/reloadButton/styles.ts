import styled, { keyframes } from 'styled-components';

const circled = keyframes`
  0% {
    transform: rotate(360deg)
  }
  100% {
    transform: rotate(0deg)
  }
`;

export const ReloadContainer = styled.div`
  transform: rotate(360deg);
  width: 70px;
  height: 70px;
  position: absolute;
  right: 40px;
  cursor: pointer;
  svg {
    transition: all ease 0.4s;
    fill: #555;
  }
  &:hover svg {
    fill: #d4af37;
  }
  .rotate {
    animation: ${circled} 1.5s ease-out 1;
  }
`;
