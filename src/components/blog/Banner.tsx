// src/components/blog/Banner.tsx
import { Box, PaletteMode } from "@mui/material";

interface BannerProps {
  mode: PaletteMode;
}

function Banner({ mode }: BannerProps) {
  const lightPath = "/image/Banner_light.svg";
  const darkPath = "/image/Banner_dark.svg";

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 160, md: 200 },
        borderRadius: 1,
        mb: { xs: 3, md: 4 },
        overflow: "hidden",
      }}
    >
      <img
        src={mode === "light" ? lightPath : darkPath}
        alt="블로그 배너"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}

export default Banner;
