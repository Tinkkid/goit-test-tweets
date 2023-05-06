import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
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
