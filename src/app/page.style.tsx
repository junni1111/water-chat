import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 300px;

  background-color: red;
`;

export const Notification = styled.figure`
  width: 300px;
  top: 4px;
  left: 4px;

  position: absolute;

  color: #aaec8a;

  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  background-color: #313e2c;

  visibility: hidden;
  opacity: 0;
  transform: translateY(-30px);
  animation: fade-in 1s linear;

  @keyframes fade-in {
    5% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    95% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Body = styled.div`
  padding: 16px 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Progress = styled.div`
  width: calc(100% - 8px);
  height: 3px;
  left: 4px;
  bottom: 4px;

  position: absolute;

  background: linear-gradient(to right, #313e2c, #aaec8a);
  border-radius: inherit;

  transform: scaleX(0);
  transform-origin: left;
  animation: progress 0.6s 0.3s linear;
  @keyframes progress {
    to {
      transform: scaleX(1);
    }
  }
`;
