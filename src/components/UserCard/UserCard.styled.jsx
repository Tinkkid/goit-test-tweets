import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 380px;
  height: 460px;
  padding-top: 28px;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const stylingGrid = {
  container: {
    padding: 20,
    paddingTop: 6,
    paddingBottom: 4,
    marginTop: 0,
    marginLeft: 0,
    width: 1,
  },
  item: {
    paddingLeft: 0,
    justifyContent: 'space-between',
  },
};

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const AvatarEllipse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  z-index: 999;
`;

export const AvatarStripe = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  top: 48%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const TextInfo = styled.p`
  margin-top: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
