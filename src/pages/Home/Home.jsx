import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <NavLink to="/tweets">
      <Typography variant="h6" component="span">
        Tweets
      </Typography>
    </NavLink>
  );
};

export default Home;
