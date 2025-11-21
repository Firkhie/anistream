function Badge({ name }: { name: string }) {
  return <div className="text-xs py-0.5 px-2 rounded-sm bg-amber-100">{name}</div>;
}

export { Badge };
