import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

import userprofile from "../../assets/avatar.jpg";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      style={{ color: colors.grey[100] }}
      icon={icon}
      active={title === selected}
      onClick={() => setSelected(title)}
    >
      <Typography>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
};

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      flex={1}
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item:focus": {
          color: "unset !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} breakPoint="md">
        <Menu iconShape="square">
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            icon={<MenuOutlinedIcon />}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                ml="15px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  FACTURIO
                </Typography>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  width="100px"
                  height="100px"
                  src={userprofile}
                  alt="profile-user"
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  mt="10px"
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                >
                  Khinjer
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Web dev Freelancer
                </Typography>
              </Box>
            </Box>
          )}

          <Box pl={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              DATA
            </Typography>
            <Item
              title="Manage Team"
              icon={<PeopleOutlinedIcon />}
              to="/team"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              icon={<ContactsOutlinedIcon />}
              to="/contacts"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              icon={<ReceiptOutlinedIcon />}
              to="/invoices"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              icon={<PersonOutlinedIcon />}
              to="/form"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              icon={<CalendarTodayOutlinedIcon />}
              to="/calendar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              icon={<HelpOutlinedIcon />}
              to="/faq"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              CHARTS
            </Typography>
            <Item
              title="Bar Chart"
              icon={<BarChartOutlinedIcon />}
              to="/bar"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              icon={<PieChartOutlinedIcon />}
              to="/pie"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              icon={<TimelineOutlinedIcon />}
              to="/line"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              icon={<MapOutlinedIcon />}
              to="/geography"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar;
