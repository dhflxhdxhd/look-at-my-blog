// src/components/post/CommentDialog.tsx
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Avatar,
  Divider,
  List,
  ListItem,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

interface Comment {
  id: number;
  authorName: string;
  authorAvatar?: string;
  content: string;
  date: string;
  likes: number;
}

interface CommentDialogProps {
  open: boolean;
  onClose: () => void;
  postId: string | undefined;
}

function CommentDialog({ open, onClose, postId }: CommentDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [commentText, setCommentText] = useState("");

  // 샘플 댓글 데이터
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      authorName: "김개발",
      authorAvatar: "",
      content:
        "이 글 정말 유익해요! React.memo 덕분에 성능이 많이 개선됐습니다.",
      date: "2024.03.28",
      likes: 5,
    },
    {
      id: 2,
      authorName: "이프론트",
      authorAvatar: "",
      content:
        "저도 이런 최적화 기법을 자주 사용하는데 정말 효과적이더라구요. 혹시 useMemo와 useCallback도 같이 사용하시나요?",
      date: "2024.03.29",
      likes: 3,
    },
  ]);

  const handleCommentSubmit = () => {
    if (commentText.trim() === "") return;

    // 새 댓글 추가
    const newComment: Comment = {
      id: comments.length + 1,
      authorName: "사용자", // 실제로는 로그인한 사용자 정보 사용
      authorAvatar: "",
      content: commentText,
      date: new Date()
        .toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\. /g, ".")
        .replace(/\.$/, ""),
      likes: 0,
    };

    setComments([...comments, newComment]);
    setCommentText("");
  };

  const getInitials = (name: string) => {
    return name.charAt(0);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: { xs: 0, md: 2 },
          height: { xs: "100%", md: "600px" },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h6">댓글</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ p: 0 }}>
        {/* 댓글 목록 */}
        <List sx={{ p: 0, height: "calc(100% - 80px)", overflowY: "auto" }}>
          {comments.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                p: 3,
              }}
            >
              <Typography color="text.secondary">
                첫 댓글을 남겨보세요!
              </Typography>
            </Box>
          ) : (
            comments.map((comment) => (
              <ListItem
                key={comment.id}
                alignItems="flex-start"
                sx={{ px: 3, py: 2 }}
              >
                <Box sx={{ display: "flex", width: "100%" }}>
                  <Avatar
                    sx={{ mr: 2, bgcolor: theme.palette.primary.main }}
                    alt={comment.authorName}
                    src={comment.authorAvatar}
                  >
                    {getInitials(comment.authorName)}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {comment.authorName}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {comment.date}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ whiteSpace: "pre-wrap", mb: 1 }}
                    >
                      {comment.content}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button
                        size="small"
                        startIcon={<ThumbUpOutlinedIcon fontSize="small" />}
                        sx={{
                          minWidth: "auto",
                          textTransform: "none",
                          color: "text.secondary",
                        }}
                      >
                        좋아요 {comment.likes > 0 ? comment.likes : ""}
                      </Button>
                      <Button
                        size="small"
                        startIcon={<ReplyOutlinedIcon fontSize="small" />}
                        sx={{
                          minWidth: "auto",
                          textTransform: "none",
                          color: "text.secondary",
                        }}
                      >
                        답글
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            ))
          )}
        </List>
      </DialogContent>

      <Divider />

      {/* 댓글 입력 영역 */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          boxShadow: "0px -2px 4px rgba(0,0,0,0.05)",
          position: "sticky",
          bottom: 0,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="댓글을 남겨보세요..."
            size="small"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleCommentSubmit();
              }
            }}
            multiline
            maxRows={4}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleCommentSubmit}
            disabled={commentText.trim() === ""}
          />
        </Box>
      </Paper>
    </Dialog>
  );
}

export default CommentDialog;
