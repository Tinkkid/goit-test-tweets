import { Grid } from "@mui/material";
import { UserCard } from "../UserCard/UserCard";
import { stylingGrid } from "../UserCard/UserCard.styled";

export const UsersList = ({ users }) => {
  return (
    <Grid container spacing={8} sx={stylingGrid.container}>
      {users.map(({ user, id, avatar, tweets, followers }) => (
        <UserCard
          key={id}
          name={user}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
        />
      ))}
    </Grid>
  );
};
