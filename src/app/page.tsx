import ToolCom from "@/components/ui/ToolCom";
import { tools } from "./tools";

export default function Home() {
  return (
    <main className="h-screen container ">
      <div className=" text-center mt-10">
        <h2 className=" text-4xl">
          All-in-One Media Toolkit - Simplify Your Digital Workflow
        </h2>
        <p>Convert, Capture, Resize, and Download—all from one app</p>
      </div>
      <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-7 px-6">
        {tools.map((tool) => {
          return (
            <ToolCom
              key={tool.id}
              name={tool.name}
              description={tool.description}
            />
          );
        })}
      </div>
    </main>
  );
}
