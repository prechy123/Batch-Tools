"use client";

import React, { useEffect, useState } from "react";
import * as motion from "framer-motion/client";

import { tools } from "@/app/tools";
import useFileInput from "@/hooks/useFileInput";
import useTextInput from "@/hooks/useTextInput";
import useServerHandler from "@/hooks/useServerHandler";
import Image from "next/image";
import Drawer from "../ui/Drawer";
import AccordionItem from "./sub-components/AccordionItem";
import ToolsCarousel from "../ui/ToolsCarousel";

const SingleInputTool = ({ toolName }: { toolName: string }) => {
  const currentTool = tools.find((tool) => tool.name === toolName);

  const [imageLink, setImageLink] = useState<string | null>(null);
  const [allowDimensions, setAllowDimension] = useState(false);
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [progressWidth, setProgressWidth] = useState<string>("0%");
  const [textArea, setTextArea] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [inputField, setInputField] = useState<boolean>(false);
  const [textResponse, setTextResponse] = useState<string>("");

  const {
    file,
    downloadLink,
    setFile,
    setDownloadLink,
    handleFileChange,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useFileInput();
  const { textInput, setTextInput, url, setUrl } = useTextInput();
  const { fileName, setFileName, loading, handleSubmit, images, setImages } =
    useServerHandler({
      toolName: currentTool?.name,
      file,
      url,
      currentTool,
      setDownloadLink,
      width,
      height,
      setImageLink,
      text,
      setTextResponse,
    });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [toolName]);
  useEffect(() => {
    if (currentTool?.name === "Image-Resizer") {
      setInputField(true);
      setAllowDimension(true);
    } else if (
      currentTool?.name === "QR-Code-Generator" ||
      currentTool?.name === "Youtube-Downloader" ||
      currentTool?.name === "HTML-to-PDF-Converter"
    ) {
      setTextInput(true);
    } else if (currentTool?.name === "JSON-to-CSV") {
      setTextArea(true);
    } else {
      setInputField(true);
    }
  }, [currentTool?.name, setTextInput]);

  function updateProgressBar() {
    let current_progress = 0,
      step = 0.2;
    const interval = setInterval(function () {
      current_progress += step;
      const progress =
        Math.round((Math.atan(current_progress) / (Math.PI / 2)) * 100 * 1000) /
        1000;
      setProgressWidth(`${progress}%`);
      if (progress >= 100) {
        clearInterval(interval);
      } else if (progress >= 70) {
        step = 0.1;
      }
    }, 100);
    return interval;
  }
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (loading) {
      interval = updateProgressBar();
    } else {
      if (progressWidth !== "0%") {
        setProgressWidth("100%");
        setTimeout(() => {
          setProgressWidth("0%");
        }, 1000);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [loading]);

  return (
    <div>
      <Drawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen}>
        {currentTool?.help && (
          <div
            className=" text-justify"
            dangerouslySetInnerHTML={{ __html: currentTool.help }}
          />
        )}
      </Drawer>
      <div className="w-full rounded fixed top-[70px] left-0 right-0">
        <div
          className=" bg-gradient-to-r from-indigo-500 to-pink-500 h-1 rounded-l transition-all duration-300"
          role="progressbar"
          style={{ width: progressWidth }}
        ></div>
      </div>
      <h1 className=" text-center mt-6 text-2xl">
        {toolName.replace(/-/g, " ")}
      </h1>
      <p className=" text-center">{currentTool?.description}</p>
      <div className="flex justify-center w-full mt-6">
        {textInput ? (
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[350px] md:w-[600px] text-center"
              placeholder=" Enter Url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value), setDownloadLink(null);
              }}
            />
          </div>
        ) : textArea ? (
          <div className="w-full md:mx-32 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-lg dark:bg-gray-800">
              <textarea
                id="editor"
                rows={20}
                className="block w-full px-0 text-sm text-gray-800 bg-gray-50 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 focus:outline-none"
                placeholder="Write JSON data..."
                onChange={(e) => {
                  setText(e.target.value), setDownloadLink(null);
                }}
                value={text}
              ></textarea>
            </div>
          </div>
        ) : (
          inputField && (
            <label
              {...getRootProps()}
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-slate-600/25 dark:hover:bg-gray-800 hover:bg-neutral-500  dark:border-gray-600 dark:hover:border-gray-500 max-w-[500px]"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {file ? (
                  <>
                    <p className="mb-2 font-lg font-semibold text-center">
                      {file.name}
                    </p>
                    <p className=" pt-2">Click to change</p>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-8 h-8 mb-4 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    {isDragActive ? (
                      <p className="font-semibold">Drop file here</p>
                    ) : (
                      <p className="mb-2 text-sm  text-center">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                    )}
                  </>
                )}
              </div>
              <input
                {...getInputProps()}
                id="dropzone-file"
                accept={currentTool?.acceptType}
                type="file"
                className="hidden"
                onChange={(e) => {
                  setImages([]);
                  handleFileChange(e);
                }}
              />
            </label>
          )
        )}
      </div>
      {allowDimensions && (
        <div className=" flex justify-center gap-5 text-center mt-3">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Width
              <input
                type="text"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Height
              <input
                type="text"
                id="small-input"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
      <div className=" flex justify-center mt-2 gap-1 md:gap-2 flex-wrap">
        {images &&
          images.length > 0 &&
          images.map((image) => (
            <div key={image.page_number}>
              <h4>Page {image.page_number}</h4>
              <Image
                src={`data:image/jpeg;base64,${image.image_data}`}
                alt={`Dirchy - Page ${image.page_number}`}
                width={200}
                height={200}
              />
              <a
                href={`data:image/jpeg;base64,${image.image_data}`}
                rel="nofollow"
                download={fileName}
                onClick={() => {
                  setImages((prevValues) =>
                    prevValues.filter(
                      (prev) => prev.page_number !== image.page_number
                    )
                  );
                }}
                className=" flex flex-col items-center justify-center mt-1"
              >
                <button
                  type="button"
                  className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  Download
                </button>
              </a>
            </div>
          ))}
      </div>
      <div className=" flex justify-center mt-2">
        {loading ? (
          <button
            disabled
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        ) : downloadLink ? (
          <div className=" flex flex-col">
            {textResponse && (
              <div>
                <h4 className=" text-center font-semibold mb-1">
                  Summarized text:{" "}
                </h4>
                <p className="text-justify mb-2">{textResponse}</p>
              </div>
            )}
            <div className="mb-2 self-center">
              <label className="block text-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                Edit file name:
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[260px] md:w-[350px] text-center p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Edit file name"
              />
            </div>
            <a
              href={downloadLink}
              rel="nofollow"
              download={fileName}
              onClick={() => {
                setFile(null);
                setDownloadLink(null);
                setUrl("");
                setText("");
              }}
              className=" flex flex-col items-center justify-center"
            >
              <button
                type="button"
                className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                Download
              </button>
              {imageLink && (
                <motion.div
                  className="flex justify-center items-center flex-col"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>Image:</h3>
                  <Image
                    src={imageLink}
                    alt="Resized"
                    width={width ? Number(width) : 150}
                    height={height ? Number(height) : 150}
                  />
                </motion.div>
              )}
            </a>
          </div>
        ) : (
          images &&
          images.length === 0 && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
              onClick={handleSubmit}
            >
              {currentTool?.actionWord}
            </button>
          )
        )}
      </div>

      <div className="fixed bottom-7 right-3">
        <button
          className="text-white bg-[#771D1D] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-[#BF125D] dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          Help
        </button>
      </div>
      <div className=" mx-10 mt-10">
        <h5 className="text-4xl font-bold mb-2">Related Tools</h5>
        <ToolsCarousel toolName={toolName} />
      </div>
      <AccordionItem
        title={toolName.replace(/-/g, " ")}
        content={
          currentTool?.fullDescription
            ? currentTool?.fullDescription
            : "Try again Later"
        }
      />
    </div>
  );
};

export default SingleInputTool;
