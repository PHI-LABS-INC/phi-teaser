import { type NextRequest } from "next/server";
import { kv } from "@vercel/kv";
import { Address } from "viem";
import { createCreatorEvaluationAttestation, createCreatorEvaluationSchema } from "@/lib/ethsign";

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

  try {
    const creatorAddress = "0x8704FD8d0cAC031BeBE138762D645B9B47e685f9".toLowerCase() as Address;
    const evaluatorAddress = address as Address;
    const score = 1;
    const comment = "Great artwork!";

    const creatorEvaluationSchemaId = await createCreatorEvaluationSchema();
    const attestationId = await createCreatorEvaluationAttestation(
      creatorEvaluationSchemaId,
      creatorAddress,
      key,
      evaluatorAddress,
      score,
      comment
    );
    console.log(`created to ${evaluatorAddress} by ${creatorAddress} with score ${score} and comment ${comment}`);
    console.log("Attestation created with ID:", attestationId);
  } catch (err) {
    console.error(err);
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
