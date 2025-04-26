export const HeadingBlock = ({
  text,
  level,
}: {
  text: string;
  level: 1 | 2 | 3;
}) => {
  const Tag = `h${level}` as const;
  const styles = {
    1: "text-3xl font-bold my-6 ",
    2: "text-2xl font-bold my-6 ",
    3: "text-xl font-bold my-6 ",
  };

  return <Tag className={`${styles[level]} leading-tight`}>{text}</Tag>;
};
