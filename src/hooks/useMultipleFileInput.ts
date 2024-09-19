import react, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";

function useMultipleFileInput() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const handleFileChange = useCallback(
    (e: react.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (selectedFiles && selectedFiles.length > 0) {
        setFiles((prevFile) =>
          prevFile !== selectedFiles ? selectedFiles : prevFile
        );
        setDownloadLink(null);
      }
    },
    []
  );

  //   const onDrop = useCallback((acceptedFiles: File[]) => {
  //     if (acceptedFiles.length > 0) {
  //       setFiles((prevFile) => {
  //         const filesArray = Array.from(prevFile);

  //         if (filesArray.some((file) => file.name !== acceptedFiles[0].name)) {
  //           return [...prevFile, acceptedfiles[0]];
  //         }

  //         return filesArray;
  //       });
  //     }
  //   }, []);

  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //     onDrop,
  //     multiple: false,
  //     noClick: true,
  //   });

  return {
    files,
    downloadLink,
    setFiles,
    setDownloadLink,
    handleFileChange,
    // getRootProps,
    // getInputProps,
    // isDragActive,
  };
}

export default useMultipleFileInput;
