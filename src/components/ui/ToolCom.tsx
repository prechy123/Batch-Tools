import Link from "next/link";
import React from "react";

interface ToolComProps {
  name: string;
  description: string;
}

const ToolCom = ({ name, description }: ToolComProps) => {
  return (
    <Link
      href={`/tool/${name}`}
      className="flex flex-col mx-auto justify-center md:justify-around min-h-[120px] sm:h-[160px] max-w-sm p-4 bg-slate-600/25 rounded-lg shadow hover:bg-neutral-500 dark:hover:bg-gray-700"
    >
      <h3 className="mb-2 text-xl md:text-2xl font-bold tracking-tight">{name.replace(/-/g, ' ')}</h3>
      <p className="font-normal">{description}</p>
    </Link>
  );
};

export default ToolCom;
