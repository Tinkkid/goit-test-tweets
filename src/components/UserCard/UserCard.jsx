import { Grid } from "@mui/material";
import {
  CardContainer,
  stylingGrid,
  Logo,
  AvatarEllipse,
  AvatarStripe,
} from "./UserCard.styled";
import svgAbove from "../../assets/img/image-above.svg";
import logo from "../../assets/img/logo.svg";

export const UserCard = ({ name, tweets, followers, avatar }) => {
  return (
    <Grid xs={4} sx={stylingGrid.item}>
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
        <p>{name}</p>
        <p>{tweets}</p>
        <p>{followers}</p>
      </CardContainer>
    </Grid>
  );
};
