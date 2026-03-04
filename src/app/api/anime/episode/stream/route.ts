import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.toString();

  const url = `https://anistream-api-nine.vercel.app/anime/stream?${params}`;

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data);
}
