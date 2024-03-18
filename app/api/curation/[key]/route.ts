import { type NextRequest } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: NextRequest, { params: { key } }: { params: { key: string } }) {
  const count = await kv.scard(`curations:${key}`);
  return Response.json(
    { count },
    {
      status: 200,
      // headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60" },
    }
  );
}

export async function PUT(request: NextRequest, { params: { key } }: { params: { key: string } }) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address")?.toLowerCase();
  if (!address) {
    return Response.json({ error: "address is required" }, { status: 400 });
  }

  await kv.sadd(`curations:${key}`, address);
  return Response.json(null, { status: 200 });
}

export async function DELETE(request: NextRequest, { params: { key } }: { params: { key: string } }) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address")?.toLowerCase();
  if (!address) {
    return Response.json({ error: "address is required" }, { status: 400 });
  }

  await kv.srem(`curations:${key}`, address);
  return Response.json(null, { status: 200 });
}
