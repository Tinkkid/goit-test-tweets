import PropTypes from 'prop-types';
import {
  CardContainer,
  AvatarEllipse,
  UpperContainer,
  TextInfo,
  InfoContainer,
} from './UserCard.styled';
import logo from '../../assets/img/logo.svg';
import { BtnFollow } from '../ButtonFollow/ButtonFollow';
import { useState } from 'react';
import { updateUser } from '../../services/user-api';
import { localGetStorage } from '../../helpers/helpers';

export const UserCard = ({ tweets, followers, avatar, id }) => {
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

  return (
    <CardContainer>
      <UpperContainer>
        <div>
          <img src={logo} alt="logo" width="76" height="22" />
        </div>
        <AvatarEllipse>
          <img src={avatar} alt="avatar" width="62" height="62" />
        </AvatarEllipse>
      </UpperContainer>
      <InfoContainer>
        <TextInfo>
          <p>{tweets} Tweets</p>
          <p>{totalFollowers.toLocaleString('en-US')} Followers</p>
        </TextInfo>
        <BtnFollow onClickBtn={handleClick} isFollowing={isFollowing} />
      </InfoContainer>
    </CardContainer>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
