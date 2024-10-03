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
      {/* <span className=" h-[1px] bg-black dark:bg-white w-full block"></span> */}
      <div className=" text-l sm:text-xl px-10 md:px-20 text-justify">
        <h2 className=" text-4xl font-bold text-center mt-20">LEARN MORE</h2>
        <p>
          Welcome to Batch Tools! Batch Tools is your go-to platform for a wide
          variety of easy-to-use tools designed to make handling digital files
          simpler and more efficient. Whether you need to convert, resize,
          extract, or modify files, Batch Tools provides a streamlined process
          for all your needs.
          <br /> Explore Batch Tools today and take advantage of our current
          tools, with many more exciting features on the way! Stay tuned for the
          upcoming tools to further enhance your experience at Batch Tools.
        </p>
        <span className=" font-bold text-3xl mt-3 block">
          Navigating Batch Tools
        </span>
        <p className=" mt-1">
          To get started, simply visit the Batch Tools website and explore our
          collection of tools. Each tool follows a straightforward process:
        </p>
        <ol className=" list-decimal mt-2">
          <li>
            <span className=" font-bold text-xl">Upload Your File</span> -
            Select the tool you want to use, and upload your file (whether it's
            a PDF, image, video, or another type of document). Our platform
            supports drag-and-drop functionality for your convenience.
          </li>
          <li>
            <span className=" font-bold text-xl">Process the File</span> - After
            uploading, click the action button relevant to the tool, such as
            "Convert," "Resize," or "Remove." The system will process your file
            quickly and efficiently while maintaining high quality.
          </li>
          <li>
            <span className=" font-bold text-xl">Download the Output</span> -
            Once the process is complete, a download link will be generated for
            you to retrieve your converted or modified file.
          </li>
        </ol>
        <p className=" mt-5">
          Explore Batch Tools today and streamline your workflow with our
          current tools, while looking forward to more exciting features coming
          soon!
        </p>
      </div>
      <br />
      <br />
    </main>
  );
}
