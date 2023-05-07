import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GoBackLink } from '../GoBackLink/GoBackLink';
import { styleBar, StyledLink } from './Header.styled';
import logo from '../../assets/img/logo.svg';

const Header = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const tweetsPage = location.pathname === '/tweets';

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
            <ArrowBackIcon />
            <Typography variant="h5" component="span">
              Back
            </Typography>
          </GoBackLink>
        )}
        <a
          href="https://goit.global/ua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="logo" width="100" />
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
