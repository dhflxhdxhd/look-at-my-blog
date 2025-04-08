// 전체 글 목록 조회
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse
) {
  try {
    const notionRes = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page_size: 10,
          //   filter: {
          //     property: "상태",
          //     status: {
          //       equals: "공개",
          //     },
          //   },
        }),
      }
    );

    console.log(`${process.env.NOTION_DB_ID}`);
    const data = await notionRes.json();
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: "Failed to fetch posts" });
  }
}
