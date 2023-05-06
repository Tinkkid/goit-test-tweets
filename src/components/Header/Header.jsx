import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { GoBackLink } from "../GoBackLink/GoBackLink";
import { styleBar, StyledLink } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const tweetsPage = location.pathname === "/tweets";

  return (
    <AppBar position="static" sx={styleBar.appbar}>
      <Toolbar sx={styleBar.toolbar}>
        {!tweetsPage ? (
          <StyledLink to="/">
            <Typography variant="h5" component="span">
              Home
            </Typography>
          </StyledLink>
        ) : (
          <GoBackLink to={backLinkHref}>
            <Typography variant="h5" component="span">
              Back
            </Typography>
          </GoBackLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
