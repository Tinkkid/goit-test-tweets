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
