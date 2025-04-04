import {
  Button,
  Switch,
  Box,
  useTheme,
  useMediaQuery,
  PaletteMode,
  AppBar,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface HeaderProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function Header({ mode, toggleColorMode }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        width: "100%",
        py: { xs: 1, md: 1.5 },
        borderBottom: "1px solid",
        borderColor: "divider",
        backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#121212",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          px: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: "900px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>블로그입니다</p>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {mode === "dark" ? (
              <Brightness7Icon fontSize="small" />
            ) : (
              <Brightness4Icon fontSize="small" />
            )}
            <Switch
              checked={mode === "dark"}
              onChange={toggleColorMode}
              color="primary"
              size={isMobile ? "small" : "medium"}
            />
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
