import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #a282ed;
  text-decoration: none;

  &.active {
    color: white;
  }
`;

export const styleBar = {
  appbar: {
    bgcolor: "primary.main",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
  },
  toolbar: {
    justifyContent: "center",
  },
};
