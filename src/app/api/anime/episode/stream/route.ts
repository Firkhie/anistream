import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const id = searchParams.get("id") || "";
  const source = searchParams.get("source") || "hianime";
  const server = searchParams.get("server") || "hd-1";
  const type = searchParams.get("type") || "sub";

  const baseUrl = process.env.NEXT_PUBLIC_ANISTREAM_API;

  let url = "";
  if (source === "yumaapi") {
    url = `${baseUrl}/anime/stream?id=${id}&source=yumaapi`;
  } else {
    url = `${baseUrl}/anime/stream?id=${id}&server=${server}&type=${type}&source=${source}`;
  }

  const res = await fetch(url, {
    cache: "no-store",
  });
  const data = await res.json();

  return Response.json(data);
}
