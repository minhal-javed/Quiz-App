export type Quiz={
    category :string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers: string[],
    question:string,
    type:string

}

export type QuestionsProps = {
    questions: string,
    options: string[]
    callback: (e: React.FormEvent<EventTarget>,ans:string)=>void
}

export type QuestionType={
    question:string,
    answer:string,
    option:string[],

    correct_answer: string

}