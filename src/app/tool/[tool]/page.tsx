"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import SingleInputTool from "@/components/tool/SingleInputTool";
import { useParams } from "next/navigation";

const ToolPage = () => {
  const { tool } = useParams()

  return (
    <div className=" h-screen container mx-6">
      <SingleInputTool tool={tool} />
    </div>
  );
};

export default ToolPage;
