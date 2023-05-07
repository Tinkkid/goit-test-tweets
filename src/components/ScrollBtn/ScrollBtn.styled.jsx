import styled from '@emotion/styled';

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border: transparent;
  border-radius: 50px;
  background-color: #ae7be3;
  padding: 8px;
  margin-left: auto;
  cursor: pointer;
  transition: all 250ms linear 0s;
  animation: pulse 2s infinite;

  &:hover,
  &:focus {
    background: #5cd3a8;

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
      }
    }
  }
`;
