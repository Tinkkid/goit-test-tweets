import styled from '@emotion/styled';
import svgAbove from '../../assets/img/image-above.svg';

export const CardContainer = styled.li`
  position: relative;
  padding-top: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  width: 340px;
  height: 460px;

  @media screen and (min-width: 768px) {
    width: 380px;
    height: 460px;
  }

  &::after {
    position: absolute;
    top: 220px;
    z-index: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 8px;
    transform: translateY(-50%);
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const UpperContainer = styled.div`
  padding-left: 20px;
  height: 238px;
  margin-bottom: 26px;
  background-image: url(${svgAbove});
  background-repeat: no-repeat;
  background-size: 240px 160px;
  background-position: left 25px top 8px;

  @media screen and (min-width: 768px) {
    background-size: 280px 168px;
    background-position: left 36px top 8px;
  }

  @media screen and (min-width: 1440px) {
    background-size: 308px 168px;
    background-position: left 36px top 8px;
  }
`;

export const AvatarEllipse = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 136px;
  overflow: hidden;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  padding-bottom: 36px;
`;

export const TextInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
