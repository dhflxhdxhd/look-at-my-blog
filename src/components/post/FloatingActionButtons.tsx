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
import CommentDialog from "./CommentDialog";

interface FloatingActionButtonsProps {
  postId: string | undefined;
  likeCount?: number;
  commentCount?: number;
}

function FloatingActionButtons({
  postId,
  likeCount = 0,
  commentCount = 2,
}: FloatingActionButtonsProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [liked, setLiked] = useState(false);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);

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
    right: { md: 32, lg: "calc((100% - 900px) / 2 - 70px)" },
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

  const handleCommentClick = () => {
    setCommentDialogOpen(true);
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
    <>
      <Box sx={isMobile ? mobilePosition : desktopPosition}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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
          {!isMobile && (
            <Typography variant="caption" sx={{ mt: 0.5 }}>
              {likeCount + (liked ? 1 : 0)}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
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
                onClick={handleCommentClick}
                sx={{
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  bgcolor: "background.paper",
                  boxShadow: 1,
                  "&:hover": {
                    bgcolor: "action.hover",
                  },
                  color: commentDialogOpen ? "primary.main" : "inherit",
                }}
                aria-label="댓글"
              >
                {commentDialogOpen ? (
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

      <CommentDialog
        open={commentDialogOpen}
        onClose={() => setCommentDialogOpen(false)}
        postId={postId}
      />
    </>
  );
}

export default FloatingActionButtons;
