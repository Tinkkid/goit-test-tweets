import { Grid } from "@mui/material";
import { CardContainer, stylingGrid } from "./UserCard.styled";

export const UserCard = ({ name, tweets, followers }) => {
  return (
    <Grid xs={4} sx={stylingGrid.item}>
      <CardContainer>
        <p>{name}</p>
        <p>{tweets}</p>
        <p>{followers}</p>
      </CardContainer>
    </Grid>
  );
};
