"use client";

import React, { useEffect, useState } from "react";
import * as motion from "framer-motion/client";

import { tools } from "@/app/tools";
import useFileInput from "@/hooks/useFileInput";
import useTextInput from "@/hooks/useTextInput";
import useServerHandler from "@/hooks/useServerHandler";
import Image from "next/image";

const SingleInputTool = ({ tool }: { tool }) => {
  const toolName: string = decodeURIComponent(tool);
  const currentTool = tools.find((tool) => tool.name === toolName);

  const [imageLink, setImageLink] = useState<string | null>(null);
  const [allowDimensions, setAllowDimension] = useState(false);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
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
  const { fileName, setFileName, loading, handleSubmit } = useServerHandler({
    toolName: currentTool?.name,
    file,
    url,
    currentTool,
    setDownloadLink,
    width,
    height,
    setImageLink,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tool]);
  useEffect(() => {
    if (currentTool?.name === "Image Resizer") {
      setAllowDimension(true);
    } else if (
      currentTool?.name === "QR Code Generator" ||
      currentTool?.name === "Youtube Downloader"
    ) {
      setTextInput(true);
    }
  }, [currentTool?.name, setTextInput]);

  return (
    <>
      <h1 className=" text-center mt-6 text-2xl">{toolName}</h1>
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
        ) : (
          <label
            {...getRootProps()}
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-slate-600/25 dark:hover:bg-gray-800 dark:bg-slate-600/25 hover:bg-neutral-500  dark:border-gray-600 dark:hover:border-gray-500 max-w-[500px]"
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
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
              onChange={handleFileChange}
            />
          </label>
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
              download={fileName}
              onClick={() => {
                setFile(null);
                setDownloadLink(null);
                setUrl("");
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
                  <h3>Resized Image:</h3>
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
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            onClick={handleSubmit}
          >
            {currentTool?.actionWord}
          </button>
        )}
      </div>
    </>
  );
};

export default SingleInputTool;
