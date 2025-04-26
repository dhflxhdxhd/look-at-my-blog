export const CodeBlock = ({ text }: { text: string }) => {
  return (
    <pre className="bg-[#f5f5f5]  text-gray-800 dark:text-gray-200 p-4 rounded-md text-sm font-mono leading-relaxed overflow-x-auto border border-gray-300 dark:border-gray-600">
      <code>{text}</code>
    </pre>
  );
};
