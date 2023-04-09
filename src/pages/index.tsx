import React, { useState } from "react";
import Accordion from "./components/Accordion";

export default function Home() {
  const [index, setIndex] = useState(false);

  const data = [
    {
      id: 0,
      question: "What is Next.Js ?",
      answer: "The React Framework for Production",
    },
    {
      id: 1,
      question: "What is Tailwindcss ?",
      answer:
        "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    },
    {
      id: 2,
      question: "What is art ?",
      answer:
        " a visual object or experience consciously created through an expression of skill or imagination.",
    },
  ];
  return (
    <>
    <div className="flex justify-center items-center text-rose-500 text-2xl">NextJS Template V2</div>
      {data.map((data) => {
        return (
          <Accordion
            key={data.id}
            title={data.question}
            children={data.answer}
          />
        );
      })}

    </>
  )
}
