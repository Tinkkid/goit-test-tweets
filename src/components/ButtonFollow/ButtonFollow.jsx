import PropTypes from 'prop-types';
import { BtnFlw } from './ButtonFollow.styled';

export const BtnFollow = ({ onClickBtn, isFollowing }) => {
  const btnBackground = isFollowing ? '#5cd3a8' : '#EBD8FF';
  return (
    <BtnFlw type="button" onClick={onClickBtn} btnBackground={btnBackground}>
      {isFollowing ? <p>Following</p> : <p>Follow</p>}
    </BtnFlw>
  );
};

BtnFollow.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};
