import React, { useState } from "react";

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className=" mb-20 mt-10">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 rtl:text-right text-black border-b border-gray-200 dark:border-gray-700 dark:text-white font-semibold gap-3"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
        >
          <span className=" uppercase">Learn More about {title}</span>
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`${isOpen ? "block" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 rounded-lg bg-slate-600/25">
          <p className="mb-2 text-black dark:text-white text-lg text-justify">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
