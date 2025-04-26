export const ListBlock = ({
  text,
  ordered,
}: {
  text: string;
  ordered: boolean;
}) => {
  const baseClass = "pl-5 mb-2 text-base leading-relaxed text-gray-800 ";
  const itemClass = "mb-1 marker:text-gray-500 ";

  return ordered ? (
    <ol className={`list-decimal list-inside ${baseClass}`}>
      <li className={itemClass}>{text}</li>
    </ol>
  ) : (
    <ul className={`list-disc list-inside ${baseClass}`}>
      <li className={itemClass}>{text}</li>
    </ul>
  );
};
