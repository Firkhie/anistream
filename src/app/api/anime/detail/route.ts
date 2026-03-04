import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  const baseUrl = process.env.NEXT_PUBLIC_ANISTREAM_API;
  const url = `${baseUrl}/anime/detail/${id}`;

  const res = await fetch(url, {
    next: { revalidate: 21600 },
  });
  const data = await res.json();

  return Response.json(data);
}
