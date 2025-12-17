import { useRef } from "react";
import triangle from "./Triangle";

type QuestionProps = {
  name: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function Question({ name, answer, isExpanded, onToggle }: QuestionProps) {
  const answerRef = useRef<HTMLSpanElement>(null);

  return (
    <div className="py-2.5">
      <button
        onClick={onToggle}
        className="w-full cursor-pointer flex justify-between items-center"
      >
        <span className="font-poppins text-[15px] text-left lg:text-lg">{name}</span>
        <span
          className={`transition-transform duration-300 ${isExpanded ? "-rotate-180" : ""} flex items-center`}
        >
          {triangle}
        </span>
      </button>

      <span
        ref={answerRef}
        className="text-[14px] block transition-all duration-300 overflow-hidden translate-y-2.5 lg:text-lg"
        style={{
          height: isExpanded ? answerRef.current?.scrollHeight : 0,
          marginBottom: isExpanded ? "10px" : "0",
        }}
      >
        {answer}
      </span>
    </div>
  );
}
