import Question from "./Question"
import data from "./data/questionsFAQ.json"
import companyData from "./data/questionsFAQCompany.json"
import { useState } from "react";
import { Role } from "@/app/types/auth";

type QuestionData = {
    name: string,
    answer: string
}

type FAQProps = {
    role?: Exclude<Role, 'ADMIN'>;
}

export default function FAQ({ role = 'STUDENT' }: FAQProps) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const questions: QuestionData[] = role === 'COMPANY' ? companyData.questionsFAQ : data.questionsFAQ

    return (
        <div className="flex flex-col gap-6 justify-center items-center px-4 py-10 lg:max-w-4xl">
            <div className="flex flex-col gap-5 items-center justify-center text-center">
                <h2 className="text-2xl font-black md:text-[32px]">FAQ express</h2>
                <p className="text-sm md:text-base">{role === 'COMPANY' ? "Vous vous posez des questions ? Voici quelques réponses." : "Tu te poses des questions ? Voici quelques réponses."}</p>
            </div>
            <div className="flex flex-col overflow-hidden shadow-[0px_4px_4px_0px_#00000040] rounded-[10px] lg:shadow-header px-5 py-2.5 ">
                {questions.map((question, index) => (
                    <div key={index}> 
                        <Question name={question.name} answer={question.answer} isExpanded={expandedIndex === index}
                            onToggle={() => {
                                setExpandedIndex(expandedIndex === index ? null : index)
                            }} />
                        {index !== questions.length - 1 && (<div className="border-t-1"></div>)}
                    </div>
                ))}
            </div>
        </div>
    )
}