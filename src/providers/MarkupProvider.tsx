import { tools } from "@/app/tools";
import Head from "next/head";
import { ReactNode } from "react";

interface ToolProps {
  toolName: string;
  children: ReactNode;
}

export default function MarkupProvider({ children, toolName }: ToolProps) {
  const currentTool = tools.find((tool) => tool.name === toolName);
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: currentTool?.name.replace(/-/g, " "),
              description: currentTool?.description,
              provider: {
                "@type": "Organization",
                name: "Batch Tools",
                url: `https://batchtools.site/tool/${currentTool?.name}`,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "180000",
              },
            }),
          }}
        />
      </Head>
      {children}
    </>
  );
}
