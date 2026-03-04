import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const days = searchParams.get("days");
  const page = searchParams.get("page");
  const perPage = searchParams.get("perPage");

  const url = `https://anistream-api-nine.vercel.app/anime/airing?days=${days}&page=${page}&perPage=${perPage}`;

  const res = await fetch(url, {
    next: { revalidate: 21600 },
  });
  const data = await res.json();

  return Response.json(data);
}
