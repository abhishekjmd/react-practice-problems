import React, { useState } from "react";
import { accordianBackground, iconMinus, iconPlus, iconStar } from "../assets";

function Accordian() {
  //   const [toggleAccordion, setToggleAccordion] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const faqData = [
    {
      index: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It allows you to build reusable UI components and efficiently update the UI when data changes.",
    },
    {
      index: 2,
      question: "What are React Hooks?",
      answer:
        "Hooks are functions introduced in React 16.8 that let you use state and lifecycle features in functional components. Examples include useState, useEffect, and useRef.",
    },
    {
      index: 3,
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight in-memory representation of the real DOM. React uses it to minimize direct DOM manipulation and improve performance by updating only what's necessary.",
    },
    {
      index: 4,
      question: "What is the useEffect hook used for?",
      answer:
        "useEffect allows you to perform side effects in function components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after the component renders.",
    },
    {
      index: 5,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to HTML. It is used with React to describe what the UI should look like and is compiled to React.createElement calls.",
    },
    {
      index: 6,
      question: "What is the difference between props and state?",
      answer:
        "Props are read-only and passed to a component by its parent. State is a local, mutable data store that controls how the component behaves or renders.",
    },
  ];

  const handleAccordian = (index) => {
    setSelectedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="flex h-[100vh] w-[100vw] overflow-x-hidden overflow-y-hidden justify-center items-start bg-[#FFF0F5] ">
      <img src={accordianBackground} className="object-cover fixed z-10" />
      <div className="flex h-[100%] w-[100%]  justify-center items-center z-50">
        <div className="w-[35%] bg-[#fff] h-auto rounded-lg shadow-lg p-[20px]">
          <div className="flex flex-row  items-center space-x-3">
            <img src={iconStar} className="h-5.5 w-5.5" />
            <span className="text-3xl uppercase font-semibold">faqs</span>
          </div>
          <div className="mt-5">
            {faqData.map((item) => (
              <div className="flex flex-col">
                <div
                  className="flex flex-row w-[100%] justify-between my-2.5 items-center"
                  onClick={() => handleAccordian(item.index)}
                >
                  <p className="text-[10px] font-semibold">{item.question}</p>
                  {selectedIndex === item.index ? (
                    <img src={iconMinus} className="h-4.5 w-4.5" />
                  ) : (
                    <img src={iconPlus} className="h-4.5 w-4.5" />
                  )}
                </div>
                {selectedIndex.includes(item.index) && (
                  <p className="text-[9px] text-gray-500 mb-2.5">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
