import { AppBar, Typography } from "@mui/material";
import { ToolBar } from "./Header.styled";

const Header = () => {
  return (
    <AppBar>
      <ToolBar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
