// src/components/blog/CategoryTabs.tsx
import { Tabs, Tab, Box } from "@mui/material";
import { Category } from "../../types/post.types";

interface CategoryTabsProps {
  activeTab: Category;
  setActiveTab: (tab: Category) => void;
}

function CategoryTabs({ activeTab, setActiveTab }: CategoryTabsProps) {
  const tabs: Category[] = ["POSTS", "DAILY", "INFO"];

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
        TabIndicatorProps={{
          style: {
            backgroundColor: "#009688", // teal 색상으로 하단 인디케이터 변경
          },
        }}
        sx={{
          "& .MuiTab-root": {
            px: { xs: 2, md: 3 },
            py: { xs: 1, md: 1.5 },
            minWidth: "unset",
            textTransform: "none",
            fontSize: { xs: 14, md: 16 },
            color: "text.secondary",
            "&.Mui-selected": {
              color: "#009688", // 선택된 탭의 색상을 teal로 변경
            },
            // 클릭 효과 제거
            "&:hover": {
              backgroundColor: "transparent",
            },
            // 클릭 시 나타나는 테두리(outline) 제거
            "&:focus": {
              outline: "none",
            },
            // 포커스 표시 제거
            "&.Mui-focusVisible": {
              outline: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          },
          // ripple 효과 제거
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            value={tab}
            disableRipple // 클릭 효과(ripple) 제거
            disableFocusRipple // 포커스 ripple 효과 제거
            // 포커스 효과 및 테두리 제거를 위한 추가 스타일
            sx={{
              "&:focus": {
                outline: "none",
              },
              "&::moz-focus-inner": {
                border: 0,
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default CategoryTabs;
