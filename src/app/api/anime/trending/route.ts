import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");
  const perPage = searchParams.get("perPage");

  const url = `https://anistream-api-nine.vercel.app/anime/trending?page=${page}&perPage=${perPage}`;

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data);
}
