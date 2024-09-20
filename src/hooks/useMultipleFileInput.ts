import react, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function useMultipleFileInput() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  function convertToFileList(files: File[]) {
    if (files) {
      const dataTransfer = new DataTransfer();
      files.forEach((file) => dataTransfer.items.add(file));
      return dataTransfer.files;
    }
  }

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

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFiles((prevFile) => {
        if (prevFile) {
          const filesArray: File[] = [...Array.from(prevFile)];
          return (
            convertToFileList([...filesArray, ...acceptedFiles]) || prevFile
          );
        }
        return convertToFileList(acceptedFiles) || null;
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    noClick: true,
  });

  return {
    files,
    downloadLink,
    setFiles,
    setDownloadLink,
    handleFileChange,
    getRootProps,
    getInputProps,
    isDragActive,
  };
}

export default useMultipleFileInput;
