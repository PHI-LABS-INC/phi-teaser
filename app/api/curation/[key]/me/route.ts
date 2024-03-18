import { type NextRequest } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: NextRequest, { params: { key } }: { params: { key: string } }) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address")?.toLowerCase();
  if (!address) {
    return Response.json({ error: "address is required" }, { status: 400 });
  }
  const curated = await kv.sismember(`curations:${key}`, address);
  return Response.json({ curated: curated === 1 }, { status: 200 });
}
