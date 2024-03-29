import styled from '@emotion/styled';

export const BtnFlw = styled.button`
  width: 196px;
  padding: 14px;
  margin-top: 5px;
  background: ${props => props.btnBackground};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-align: center;
  color: #373737;
  cursor: pointer;
  transition: all 250ms linear 0s;

  &:hover,
  &:focus {
    background-color: ${props =>
      props.btnBackground === '#5CD3A8' ? '#EBD8FF' : '#5CD3A8'};
  }
`;
