import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { useTheme } from "@mui/material/styles";

// Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

function Topbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        borderRadius="3px"
        bgcolor={colors.primary[400]}
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <InputBase
          name="search"
          id="search"
          placeholder="search"
          sx={{ ml: 1, flex: 1 }}
        />
        <IconButton sx={{ p: 1 }} type="button">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
