import { tools } from "@/app/tools";
import { Metadata } from "next";

interface Params {
  params: {
    tool: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tool } = params;

  const currentTool = tools.find((t) => t.name === tool);

  return {
    title: `Batch Tools - ${tool.replace(/-/g, ' ')}`,
    description: currentTool?.description,
    keywords:
    `${tool}, batch tools, Convert document format, background removal, qr code generator, video transcriber, pdf merger, html to pdf, pdf to jpg, json to csv`,
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
