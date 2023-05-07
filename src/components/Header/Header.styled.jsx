import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const styleBar = {
  appbar: {
    bgcolor: '#5736a3',
    fontFamily: 'Montserrat',
    textTransform: 'uppercase',
    paddingLeft: 4,
    paddingRight: 4,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
};
