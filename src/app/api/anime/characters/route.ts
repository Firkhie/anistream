import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  const url = `https://anistream-api-nine.vercel.app/anime/detail/${id}/characters`;

  const res = await fetch(url, {
    next: { revalidate: 21600 },
  });
  const data = await res.json();

  return Response.json(data);
}
