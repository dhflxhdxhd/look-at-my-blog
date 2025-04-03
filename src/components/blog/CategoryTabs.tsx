// src/components/blog/CategoryTabs.tsx
import { Tabs, Tab, Box, useTheme } from "@mui/material";
import { Category } from "../../types/post.types";

interface CategoryTabsProps {
  activeTab: Category;
  setActiveTab: (tab: Category) => void;
}

function CategoryTabs({ activeTab, setActiveTab }: CategoryTabsProps) {
  const theme = useTheme();
  const tabs: Category[] = ["POSTS", "TECH", "DAILY"];

  const handleChange = (_event: React.SyntheticEvent, newValue: Category) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        width: "100%",
        mb: { xs: 3, md: 4 },
      }}
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
        aria-label="blog categories"
        sx={{
          "& .MuiTab-root": {
            px: { xs: 2, md: 3 },
            py: { xs: 1, md: 1.5 },
            minWidth: "unset",
            textTransform: "none",
            fontSize: { xs: 14, md: 16 },
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
      </Tabs>
    </Box>
  );
}

export default CategoryTabs;
