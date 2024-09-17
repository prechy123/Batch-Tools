import { tools } from "@/app/tools";
import { Metadata } from "next";

interface Params {
  params: {
    tool: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tool } = params;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const toolName: string = decodeURIComponent(tool);
  const currentTool = tools.find((t) => t.name === toolName);

  return {
    title: `Dirchy - ${toolName}`,
    description: currentTool?.description,
  };
}

function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export default ToolLayout;
