export const QuoteBlock = ({ text }: { text: string }) => (
  <blockquote className="border-l-4 border-gray-300  pl-4 ml-1 text-gray-700  italic bg-gray-50  py-2 px-3 rounded-md">
    {text}
  </blockquote>
);
