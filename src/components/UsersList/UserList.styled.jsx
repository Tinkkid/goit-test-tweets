import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 48px;
    margin-bottom: 60px;
  }
`;
