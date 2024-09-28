import MultipleInputTool from "@/components/tool/MultipleInputTool";
import SingleInputTool from "@/components/tool/SingleInputTool";
import MarkupProvider from "@/providers/MarkupProvider";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const ToolPage = ({ params }: { params: Params }) => {
  const toolName: string = params.tool;
  return (
    <MarkupProvider toolName={toolName}>
      <div className=" h-screen container mx-6">
        {toolName === "PDF-Merger" ? (
          <MultipleInputTool toolName={toolName} />
        ) : (
          <SingleInputTool toolName={toolName} />
        )}
      </div>
    </MarkupProvider>
  );
};

export default ToolPage;
