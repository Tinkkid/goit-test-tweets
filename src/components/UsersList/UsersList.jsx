import { Grid } from "@mui/material";
import { UserCard } from "../UserCard/UserCard";
import { stylingGrid } from "../UserCard/UserCard.styled";

export const UsersList = ({ users }) => {
  return (
    <Grid container spacing={6} sx={stylingGrid.container}>
      {users.map(({ user, id }) => (
        <UserCard key={id} name={user} />
      ))}
    </Grid>
  );
};
