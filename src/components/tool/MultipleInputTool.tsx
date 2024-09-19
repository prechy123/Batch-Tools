import { tools } from "@/app/tools";
import useMultipleFileInput from "@/hooks/useMultipleFileInput";
import useServerHandler from "@/hooks/useServerHandler";
import documentSvg from "../../../public/svg/document.svg";
import Image from "next/image";

const MultipleInputTool = ({ toolName }: { toolName: string }) => {
  const currentTool = tools.find((tool) => tool.name === toolName);

  const { files, downloadLink, setFiles, setDownloadLink, handleFileChange } =
    useMultipleFileInput();

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

  return (
    <>
      <h1 className=" text-center mt-6 text-2xl">{toolName}</h1>
      <p className=" text-center">{currentTool?.description}</p>
      <div className="flex justify-center w-full mt-6">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-slate-600/25 dark:hover:bg-gray-800 dark:bg-slate-600/25 hover:bg-neutral-500  dark:border-gray-600 dark:hover:border-gray-500 max-w-[500px]">
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
                <p className="mb-2 text-sm  text-center">
                  <span className="font-semibold">Click to upload</span> <br/>Select more than one pdf to merge
                </p>
              </>
            )}
          </div>
          <input
            id="dropzone-file"
            accept={currentTool?.acceptType}
            type="file"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div>
        {files &&
          Array.from(files).map((file, index) => {
            return (
              <div
                key={file.name}
                style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}
              >
                <p>{file.name}</p>
                <div>
                  <button
                    className="bg-red-300 p-2"
                    onClick={() => moveFile(index, "up")}
                    disabled={index === 0} // Disable 'up' button if it's the first item
                  >
                    Up
                  </button>
                  <button
                    className="bg-green-300 p-2"
                    onClick={() => moveFile(index, "down")}
                    disabled={index === files.length - 1} // Disable 'down' button if it's the last item
                  >
                    Down
                  </button>
                </div>
              </div>
            );
          })}
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
    </>
  );
};

export default MultipleInputTool;
