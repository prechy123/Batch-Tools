import MultipleInputTool from "@/components/tool/MultipleInputTool";
import SingleInputTool from "@/components/tool/SingleInputTool";
import MarkupProvider from "@/providers/MarkupProvider";

const ToolPage = ({ tool }: { tool: string }) => {
  return (
    <MarkupProvider toolName={tool}>
      <div className=" h-screen container mx-6">
        {tool === "PDF-Merger" ? (
          <MultipleInputTool toolName={tool} />
        ) : (
          <SingleInputTool toolName={tool} />
        )}
      </div>
    </MarkupProvider>
  );
};

// Server-side rendering function
export async function getServerSideProps(context: {
  params: { tool: string };
}) {
  const { tool } = context.params;

  return {
    props: {
      tool,
    },
  };
}

export default ToolPage;
