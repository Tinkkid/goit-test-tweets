import { Grid } from "@mui/material";
import {
  CardContainer,
  stylingGrid,
  Logo,
  AvatarEllipse,
  AvatarStripe,
  TextInfo,
} from "./UserCard.styled";
import svgAbove from "../../assets/img/image-above.svg";
import logo from "../../assets/img/logo.svg";
import { BtnFollow } from "../ButtonFollow/ButtonFollow";
// import { useMyStorage } from "../../hooks/useLocalStorage";
import { useState } from "react";
import { updateUser } from "../../services/user-api";
import { useMyGetStorage } from "../../hooks/useLocalStorage";

export const UserCard = ({ name, tweets, followers, avatar, id }) => {
  const [isFollowing, setIsFollowing] = useState(
    useMyGetStorage(`key${id}`, false)
  );

  const [totalFollowers, setTotalFollowers] = useState(followers);

  const handleClick = async () => {
    if (!isFollowing) {
      const updateQuantityFollowers = await updateUser(id, {
        followers: totalFollowers + 1,
      });
      console.log(updateQuantityFollowers);
      setTotalFollowers(updateQuantityFollowers.followers);
      setIsFollowing(true);
      localStorage.setItem(`key${id}`, JSON.stringify(true));
    } else {
      const updateQuantityFollowers = await updateUser(id, {
        followers: totalFollowers - 1,
      });
      setTotalFollowers(updateQuantityFollowers.followers);
      setIsFollowing(false);
      localStorage.removeItem(`key${id}`);
    }
  };

  return (
    <Grid item xs={6} sx={stylingGrid.item}>
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
        <TextInfo>{totalFollowers} Followers</TextInfo>
        <BtnFollow onClickBtn={handleClick} isFollowing={isFollowing} />
      </CardContainer>
    </Grid>
  );
};
