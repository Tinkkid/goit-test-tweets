import { Grid } from "@mui/material";
import {
  CardContainer,
  stylingGrid,
  Logo,
  AvatarEllipse,
  AvatarStripe,
  TextInfo,
  BtnFollow,
} from "./UserCard.styled";
import svgAbove from "../../assets/img/image-above.svg";
import logo from "../../assets/img/logo.svg";

export const UserCard = ({ name, tweets, followers, avatar }) => {
  return (
    <Grid xs={6} sx={stylingGrid.item}>
      <CardContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <div>
          <img src={svgAbove} alt="tweets" />
        </div>
        <AvatarEllipse>
          <img src={avatar} alt="avatar" width="62" height="62" />
        </AvatarEllipse>
        <AvatarStripe></AvatarStripe>
        <TextInfo>
          <b>{name}</b>
        </TextInfo>
        <TextInfo>{tweets} Tweets</TextInfo>
        <TextInfo>{followers} Followers</TextInfo>
        <BtnFollow>Follow</BtnFollow>
      </CardContainer>
    </Grid>
  );
};
