import React from "react";

interface ToolComProps {
  name: string;
  description: string;
}

const UpcomingToolCom = ({ name, description }: ToolComProps) => {
  return (
    <div
      className="flex flex-col mx-auto justify-center md:justify-around min-h-[120px] sm:h-[160px] max-w-sm p-4 bg-slate-600/25 rounded-lg shadow hover:bg-neutral-500 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight ">{name.replace(/-/g, ' ')}</h5>
      <p className="font-normal">{description}</p>
    </div>
  );
};

export default UpcomingToolCom;
