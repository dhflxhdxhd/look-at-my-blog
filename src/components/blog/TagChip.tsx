interface TagChipProps {
  label: string;
}

function TagChip({ label }: TagChipProps) {
  return (
    <span className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
      {label}
    </span>
  );
}

export default TagChip;
