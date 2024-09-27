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
    openGraph: {
      title: `Batch Tools - ${tool.replace(/-/g, ' ')}`,
      description: currentTool?.description,
      url: `https://batchtools.site/tool/${tool}`,
      type: 'website',
      images: [
        {
          url: 'https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
        },
      ],
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: true,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `Batch Tools - ${tool.replace(/-/g, ' ')}`,
      description: currentTool?.description,
      // images: {
      //   url: 'https://t4.ftcdn.net/jpg/02/18/18/55/360_F_218185587_P4zituDtWJOfClUKL6merI0BgLMIxoeC.jpg',
      //   alt: 'Og Image Alt'
      // },
    },
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
