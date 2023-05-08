import PropTypes from 'prop-types';
import { BtnLoad } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <BtnLoad type="button" onClick={onClick}>
      Load more
    </BtnLoad>
  );
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
