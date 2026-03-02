interface Props {
  index: string;
  label: string;
}

export default function SectionLabel({ index, label }: Props) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-xs font-medium text-ink-secondary tabular-nums">{index}</span>
      <div className="h-px flex-1 max-w-[2rem] bg-border" />
      <span className="text-xs font-medium tracking-widest text-ink-secondary uppercase">{label}</span>
    </div>
  );
}
