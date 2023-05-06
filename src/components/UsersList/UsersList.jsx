import { Grid } from "@mui/material";
import { useState } from "react";
import { UserCard } from "../UserCard/UserCard";
import { stylingGrid } from "../UserCard/UserCard.styled";

const usersInitial = {
  tweets: 777,
  followers: 100500,
};

export const UsersList = ({ users }) => {
  const [quantity, setQuantity] = useState(usersInitial);

  const handleIncreaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };
  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={stylingGrid.container}
    >
      {users.map(({ user, id, avatar, tweets, followers }) => (
        <UserCard
          key={id}
          id={id}
          name={user}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
          handleIncreaseQuantity={handleIncreaseQuantity}
          tweetsTotal={quantity.tweets}
        />
      ))}
    </Grid>
  );
};
