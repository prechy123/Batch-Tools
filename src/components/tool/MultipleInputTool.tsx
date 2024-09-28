"use client";

import { tools } from "@/app/tools";
import useMultipleFileInput from "@/hooks/useMultipleFileInput";
import useServerHandler from "@/hooks/useServerHandler";
import documentSvg from "../../../public/svg/document.svg";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const MultipleInputTool = ({ toolName }: { toolName: string }) => {
  const [progressWidth, setProgressWidth] = useState<string>("0%");

  const currentTool = tools.find((tool) => tool.name === toolName);

  const {
    files,
    downloadLink,
    setFiles,
    setDownloadLink,
    handleFileChange,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useMultipleFileInput();

  const { fileName, setFileName, loading, handleSubmit } = useServerHandler({
    toolName: currentTool?.name,
    files,
    currentTool,
    setDownloadLink,
  });
  const moveFile = (index: number, direction: "up" | "down") => {
    if (!files) return;
    const newFiles = [...Array.from(files)];
    if (direction === "up" && index > 0) {
      [newFiles[index - 1], newFiles[index]] = [
        newFiles[index],
        newFiles[index - 1],
      ];
    } else if (direction === "down" && index < newFiles.length - 1) {
      [newFiles[index + 1], newFiles[index]] = [
        newFiles[index],
        newFiles[index + 1],
      ];
    }
    const dataTransfer = new DataTransfer();
    newFiles.forEach((file) => dataTransfer.items.add(file));
    setFiles(dataTransfer.files);
  };

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
      <div className="w-full  rounded fixed top-[70px] left-0 right-0">
        <div
          className=" bg-gradient-to-r from-indigo-500 to-pink-500 h-1 rounded-l transition-all duration-300"
          role="progressbar"
          style={{ width: progressWidth }}
        ></div>
      </div>
      <h1 className=" text-center mt-6 text-2xl">{toolName.replace(/-/g, ' ')}</h1>
      <p className=" text-center">{currentTool?.description}</p>
      <div className="flex justify-center w-full mt-6">
        <label
          {...getRootProps()}
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-slate-600/25 dark:hover:bg-gray-800 dark:bg-slate-600/25 hover:bg-neutral-500  dark:border-gray-600 dark:hover:border-gray-500 max-w-[500px]"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {files && files.length > 0 ? (
              <>
                <div className=" relative">
                  <Image
                    src={documentSvg}
                    alt="document"
                    width={150}
                    height={150}
                  />
                  <p className="mb-2 font-lg font-semibold text-center absolute top-1/2 left-1/2">
                    {files.length} Selected
                  </p>
                </div>
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
                    <span className="font-semibold">
                      Click to upload or Drag and Drop
                    </span>{" "}
                    <br />
                    Select more than one pdf to merge
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
            multiple
            onChange={handleFileChange}
          />
        </label>
      </div>
      {files && (
        <div className="  mt-5">
          <h3 className="text-center text-xl mb-1">Arrange PDFs</h3>
          <div className=" flex gap-1 md:gap-2 items-center justify-center flex-wrap">
            {files &&
              Array.from(files).map((file, index) => {
                return (
                  <div
                    key={file.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {
                      <div className=" flex flex-col gap-1 justify-center items-center ">
                        <Document file={file}>
                          <Page
                            pageNumber={1}
                            scale={0.3}
                            width={
                              window.innerWidth < 768
                                ? 300
                                : window.innerWidth < 1024
                                ? 400
                                : 600
                            }
                            className=" h-36 w-20 md:w-32 overflow-hidden"
                          />
                        </Document>
                        <p className=" text-center">
                          {file.name.length > 15
                            ? `${file.name.substring(0, 10)}...pdf`
                            : file.name}
                        </p>

                        <div
                          className="inline-flex rounded-md shadow-sm justify-center "
                          role="group"
                        >
                          <button
                            type="button"
                            className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            onClick={() => moveFile(index, "up")}
                            disabled={index === 0}
                          >
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="-0.5 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.4092 16.4199L10.3492 13.55C10.1935 13.4059 10.0692 13.2311 9.98425 13.0366C9.89929 12.8422 9.85547 12.6321 9.85547 12.4199C9.85547 12.2077 9.89929 11.9979 9.98425 11.8035C10.0692 11.609 10.1935 11.4342 10.3492 11.29L13.4092 8.41992"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 21.4202H17C19.2091 21.4202 21 19.6293 21 17.4202V7.42017C21 5.21103 19.2091 3.42017 17 3.42017H7C4.79086 3.42017 3 5.21103 3 7.42017V17.4202C3 19.6293 4.79086 21.4202 7 21.4202Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Left
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                            onClick={() => moveFile(index, "down")}
                            disabled={index === files.length - 1}
                          >
                            <svg
                              width="20px"
                              height="20px"
                              viewBox="-0.5 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5605 8.41992L13.6205 11.29C13.779 11.4326 13.9056 11.6068 13.9924 11.8015C14.0791 11.9962 14.1239 12.2068 14.1239 12.4199C14.1239 12.633 14.0791 12.8439 13.9924 13.0386C13.9056 13.2332 13.779 13.4075 13.6205 13.55L10.5605 16.4199"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17 3.41992H7C4.79086 3.41992 3 5.21078 3 7.41992V17.4199C3 19.6291 4.79086 21.4199 7 21.4199H17C19.2091 21.4199 21 19.6291 21 17.4199V7.41992C21 5.21078 19.2091 3.41992 17 3.41992Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            Right
                          </button>
                        </div>
                      </div>
                    }
                  </div>
                );
              })}
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
                setFiles(null);
                setDownloadLink(null);
              }}
              className=" flex flex-col items-center justify-center"
            >
              <button
                type="button"
                className="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
              >
                Download
              </button>
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
    </div>
  );
};

export default MultipleInputTool;
