import PropTypes from 'prop-types';
import { UserCard } from '../UserCard/UserCard';
import { Container } from './UserList.styled';

export const UsersList = ({ users }) => {
  return (
    <Container>
      {users.map(({ user, id, avatar, tweets, followers }) => (
        <UserCard
          key={`${user}}_${id}`}
          id={id}
          name={user}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
          tweetsTotal={tweets}
        />
      ))}
    </Container>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
};
