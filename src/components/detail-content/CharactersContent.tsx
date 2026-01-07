import useAnimeCharactersById from "@/hooks/useAnimeCharactersById";
import { useParams } from "next/navigation";

export default function CharactersContent() {
  const { slug } = useParams();
  const { data, loading } = useAnimeCharactersById({ id: slug as string });

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>Characters not found.</div>;

  return (
    <div className="grid grid-cols-3 gap-2 text-sm">
      {data.results.map((char) => (
        <div key={char.id}>{char.id}</div>
      ))}
    </div>
  );
}
