// // /api/test.ts
import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: "API 작동 중!" });
}
