import PropTypes from 'prop-types';
import {
  CardContainer,
  Logo,
  AvatarEllipse,
  AvatarStripe,
  TextInfo,
} from './UserCard.styled';
import svgAbove from '../../assets/img/image-above.svg';
import logo from '../../assets/img/logo.svg';
import { BtnFollow } from '../ButtonFollow/ButtonFollow';
import { useState } from 'react';
import { updateUser } from '../../services/user-api';
import { localGetStorage } from '../../helpers/helpers';

export const UserCard = ({ name, tweets, followers, avatar, id }) => {
  const [isFollowing, setIsFollowing] = useState(
    localGetStorage(`key${id}`, false)
  );

  const [totalFollowers, setTotalFollowers] = useState(followers);

  const handleClick = async () => {
    if (!isFollowing) {
      const updateQuantityFollowers = await updateUser(id, {
        followers: totalFollowers + 1,
      });
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

  const nameColor = isFollowing ? '#5cd3a8' : '#EBD8FF';

  return (
    <div>
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
        <TextInfo
          style={{
            color: nameColor,
          }}
        >
          <b>{name}</b>
        </TextInfo>
        <TextInfo>{tweets} Tweets</TextInfo>
        <TextInfo>{totalFollowers.toLocaleString('en-US')} Followers</TextInfo>
        <BtnFollow onClickBtn={handleClick} isFollowing={isFollowing} />
      </CardContainer>
    </div>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
