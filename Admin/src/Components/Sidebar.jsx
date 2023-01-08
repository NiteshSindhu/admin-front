import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  ShoppingCartOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  TrendingUpOutlined,
  AdminPanelSettingsOutlined,
  PieChartOutlined,
  PublicOutlined,
  HomeOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexDiv from "./FlexDiv";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];
export default function Sidebar({
  isSidebarOpen,
  setSidebarOpen,
  isNotMobile,
  drawerWidth,
  user
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [active, SetActive] = useState("");
  useEffect(() => {
    SetActive(pathname.substring(1));
  }, [pathname]);
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              borderWidth: isNotMobile ? 0 : "2px",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexDiv color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Nitesh Sindhu
                  </Typography>
                </Box>
                {!isNotMobile && (
                  <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexDiv>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lctext = text.toLowerCase();
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lctext}`);
                        SetActive(lctext);
                      }}
                      sx={{
                        backgroundColor:
                          active === lctext
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lctext
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lctext
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text}>
                        {active === lctext && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexDiv textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box component="img" alt="profile" src="https://avatars.githubusercontent.com/u/88618256?v=4" height="40px" width="40px" borderRadius="50%" sx={{objectFit:"cover"}}/>
                <Box textAlign="left">
                  <Typography fontWeight="bold" fontSize="0.9rem" sx={{ color: theme.palette.secondary[100] }}>
                    {user.name}
                  </Typography>
                  <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }}>
                    {user.occupation}
                  </Typography>
                </Box>
                <SettingsOutlined sx={{color:theme.palette.secondary[300],fontSize:"25px"}}/>
              
            </FlexDiv>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}
