import ToolCom from "@/components/ui/ToolCom";
import { tools } from "./tools";
import * as motion from "framer-motion/client";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 20, rotate: 5 },
  visible: { opacity: 1, x: 0, rotate: 0 },
};

export default function Home() {
  return (
    <main className="h-screen container mx-6">
      <div className=" text-center mt-4 sm:mt-10">
        <h1 className=" text-3xl sm:text-4xl pb-3">
          All-in-One Media Toolkit - Simplify Your Digital Workflow
        </h1>
        <p className=" text-l sm:text-xl">
          Convert, Capture, Resize, and Download—all from one app
        </p>
      </div>
      <motion.div
        className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4 sm:my-7"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tools.map((tool) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              variants={childVariants}
              key={tool.id}
            >
              <ToolCom name={tool.name} description={tool.description} />
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}
