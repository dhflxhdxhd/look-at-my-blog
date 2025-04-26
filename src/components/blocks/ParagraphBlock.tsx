export const ParagraphBlock = ({ text }: { text: string }) => (
  <p
    className={`text-base leading-relaxed text-gray-800 dark:text-gray-200 my-3 tracking-normal ${
      text ? "" : "min-h-[1.5rem]"
    }`}
  >
    {text || "\u00A0"} {/* 공백을 출력하여 최소 공간 차지 */}
  </p>
);
