import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Tooltip,
  Badge,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

interface FloatingActionButtonsProps {
  likeCount?: number;
  commentCount?: number;
}

function FloatingActionButtons({
  likeCount = 0,
  commentCount = 0,
}: FloatingActionButtonsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // 모바일 환경에서는 하단에 고정된 버튼으로 변경
  const mobilePosition = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    bgcolor: "background.paper",
    borderTop: 1,
    borderColor: "divider",
    boxShadow: "0px -2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    px: 2,
    py: 1,
    zIndex: 10,
  };

  const desktopPosition = {
    position: "fixed",
    right: { md: 32, lg: "calc((100% - 900px) / 2 - 70px)" }, // 콘텐츠 영역 오른쪽에 고정
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    zIndex: 10,
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleShare = () => {
    // URL 복사 기능
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("URL이 클립보드에 복사되었습니다.");
      })
      .catch((err) => {
        console.error("URL 복사 실패:", err);
      });
  };

  return (
    <Box sx={isMobile ? mobilePosition : desktopPosition}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Tooltip title="좋아요">
          <IconButton
            onClick={handleLike}
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              bgcolor: "background.paper",
              boxShadow: 1,
              "&:hover": {
                bgcolor: "action.hover",
              },
              color: liked ? "primary.main" : "inherit",
            }}
            aria-label="좋아요"
          >
            {liked ? (
              <ThumbUpIcon fontSize="small" />
            ) : (
              <ThumbUpOutlinedIcon fontSize="small" />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Tooltip title="댓글">
          <Badge
            badgeContent={commentCount}
            color="primary"
            sx={{
              "& .MuiBadge-badge": {
                right: isMobile ? -3 : 3,
                top: isMobile ? 3 : 3,
              },
            }}
          >
            <IconButton
              onClick={handleComment}
              sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                bgcolor: "background.paper",
                boxShadow: 1,
                "&:hover": {
                  bgcolor: "action.hover",
                },
                color: showComments ? "primary.main" : "inherit",
              }}
              aria-label="댓글"
            >
              {showComments ? (
                <ChatBubbleIcon fontSize="small" />
              ) : (
                <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Badge>
        </Tooltip>
        {!isMobile && commentCount > 0 && (
          <Typography variant="caption" sx={{ mt: 0.5 }}>
            {commentCount}
          </Typography>
        )}
      </Box>

      <Tooltip title="공유하기">
        <IconButton
          onClick={handleShare}
          sx={{
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            bgcolor: "background.paper",
            boxShadow: 1,
            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
          aria-label="공유하기"
        >
          <ShareOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default FloatingActionButtons;
