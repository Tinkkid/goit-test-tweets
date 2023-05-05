import { AppBar, Toolbar, Typography } from "@mui/material";
import { StyledLink } from "./Header.styled";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Toolbar
        sx={{
          pr: 40,
          pl: 40,
          justifyContent: "space-between",
        }}
      >
        <StyledLink to="/">
          <Typography variant="h6" component="span">
            Home
          </Typography>
        </StyledLink>
        <StyledLink to="/tweets">
          <Typography variant="h6" component="span">
            Tweets
          </Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
