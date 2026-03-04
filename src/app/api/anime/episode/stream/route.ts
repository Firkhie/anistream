import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.toString();

  const baseUrl = process.env.NEXT_PUBLIC_ANISTREAM_API;
  const url = `${baseUrl}/anime/stream?${params}`;

  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();

  return Response.json(data);
}
