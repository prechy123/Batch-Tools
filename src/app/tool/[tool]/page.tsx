import MultipleInputTool from "@/components/tool/MultipleInputTool";
import SingleInputTool from "@/components/tool/SingleInputTool";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const ToolPage = ({ params }: { params: Params }) => {
  const toolName: string = params.tool;
  return (
      <div className=" h-screen container mx-6">
        {toolName === "PDF-Merger" ? (
          <MultipleInputTool toolName={toolName} />
        ) : (
          <SingleInputTool toolName={toolName} />
        )}
      </div>
  );
};

export default ToolPage;
