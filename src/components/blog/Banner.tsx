// src/components/blog/Banner.tsx
import { Box } from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 160, md: 200 },
        bgcolor: "grey.200",
        borderRadius: 1,
        mb: { xs: 3, md: 4 },
      }}
    />
  );
}

export default Banner;
