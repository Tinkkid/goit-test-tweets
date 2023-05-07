import { Grid } from '@mui/material';
import { UserCard } from '../UserCard/UserCard';
import { stylingGrid } from '../UserCard/UserCard.styled';

export const UsersList = ({ users }) => {
  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={stylingGrid.container}
    >
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
    </Grid>
  );
};
