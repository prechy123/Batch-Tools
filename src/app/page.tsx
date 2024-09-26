import ToolCom from "@/components/ui/ToolCom";
import { tools, upComingTools } from "./tools";
import * as motion from "framer-motion/client";
import UpcomingToolCom from "@/components/ui/UpcomingToolCom";

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
          Batch Tools - Simplify Your Digital Workflow
        </h1>
        <p className=" text-l sm:text-xl">
          Batch Tools offers a wide range of powerful, easy-to-use, and
          completely free tools to simplify working with files
        </p>
      </div>
      <motion.div
        className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4 sm:my-7  "
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
      <span className=" h-[1px] bg-black dark:bg-white w-full block"></span>
      <h2 className=" text-4xl font-bold">Upcoming Tools</h2>
      <motion.div
        className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4 sm:my-7  "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {upComingTools.map((tool) => {
          return (
            <motion.div
              whileHover={{ scale: 1.05 }}
              variants={childVariants}
              key={tool.id}
            >
              <UpcomingToolCom
                name={tool.name}
                description={tool.description}
              />
            </motion.div>
          );
        })}
      </motion.div>
      <br />
      <br />
    </main>
  );
}
