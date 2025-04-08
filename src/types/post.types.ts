// src/types/post.types.ts

/**
 * 블로그 포스트 타입 정의
 */
export interface Post {
  /** 포스트 고유 ID */
  id: string | number | undefined;

  /** 포스트 제목 */
  title: string;

  /** 포스트 요약 설명 */
  description: string;

  /** 작성 날짜 (YYYY.MM.DD 형식) */
  date: string;

  /** 썸네일 이미지 텍스트 */
  thumbnail?: string;

  /** 포스트 내용 */
  content: ContentItem[] | undefined;

  /** 태그 목록 */
  tags?: string[];

  /** 좋아요 수 */
  likeCount?: number;

  /** 댓글 수 */
  commentCount?: number;

  /** 작성자 정보 - 추후 구현 시 사용 */
  author?: Author;

  /** 댓글 목록 - 추후 구현 시 사용 */
  comments?: Comment[];
}

/**
 * 포스트 콘텐츠 아이템 타입
 */
export interface ContentItem {
  /** 컨텐츠 타입 (image, paragraph 등) */
  type: string;

  /** 이미지 URL (type이 image인 경우) */
  url?: string;

  /** 이미지 대체 텍스트 (type이 image인 경우) */
  alt?: string;

  /** 텍스트 내용 (type이 paragraph인 경우) */
  text?: string;
}

/**
 * 블로그 포스트 작성자 타입 정의
 */
export interface Author {
  /** 작성자 ID */
  id: number;

  /** 작성자 이름 */
  name: string;

  /** 작성자 프로필 이미지 URL */
  profileImage?: string;

  /** 작성자 소개 */
  bio?: string;
}

/**
 * 블로그 포스트 댓글 타입 정의
 */
export interface Comment {
  /** 댓글 ID */
  id: number;

  /** 댓글 내용 */
  content: string;

  /** 작성자 이름 */
  authorName: string;

  /** 작성 날짜 */
  date: string;
}

/**
 * 블로그 카테고리 타입 정의
 */
export type Category = "POSTS" | "DAILY" | "INFO";

/**
 * 다크모드 테마 상태 타입 정의
 */
export type Theme = "light" | "dark";

/**
 * 정렬 방식 타입 정의
 */
export type SortOrder = "latest" | "oldest" | "popular";

/**
 * 검색 필터 타입 정의
 */
export interface SearchFilter {
  /** 검색어 */
  query?: string;

  /** 선택된 카테고리 */
  category?: Category;

  /** 선택된 태그 */
  tags?: string[];

  /** 정렬 방식 */
  sortOrder?: SortOrder;
}
