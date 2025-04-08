// src/components/layout/Header.tsx
import {
  Box,
  Switch,
  useTheme,
  useMediaQuery,
  PaletteMode,
} from "@mui/material";
import { Link } from "react-router-dom";
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
    <Box
      component="header"
      sx={{
        width: "100%",
        py: { xs: 1, md: 1.5 },
        backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#121212",
        borderBottom: "1px solid",
        borderColor: "divider",
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                border: 1,
                borderColor: "divider",
                px: { xs: 1.5, md: 2 },
                py: { xs: 0.5, md: 0.75 },
                borderRadius: 1,
                textTransform: "none",
                fontSize: { xs: 14, md: 16 },
                color: "text.primary",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
            >
              Main
            </Box>
          </Link>

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
    </Box>
  );
}

export default Header;
