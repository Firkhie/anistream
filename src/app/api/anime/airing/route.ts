import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const days = searchParams.get("days");
  const page = searchParams.get("page");
  const perPage = searchParams.get("perPage");

  const baseUrl = process.env.NEXT_PUBLIC_ANISTREAM_API;
  const url = `${baseUrl}/anime/airing?days=${days}&page=${page}&perPage=${perPage}`;

  const res = await fetch(url, {
    next: { revalidate: 21600 },
  });
  const data = await res.json();

  return Response.json(data);
}
