import react, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function useFileInput() {
  const [file, setFile] = useState<File | null>(null);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const handleFileChange = useCallback(
    (e: react.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFile((prevFile) => (prevFile !== e.target.files[0] ? e.target.files[0] : prevFile));
        setDownloadLink(null);
      }
    },
    []
  );

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile((prevFile) => (prevFile !== acceptedFiles[0] ? acceptedFiles[0] : prevFile));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
  });

  return {
    file,
    downloadLink,
    setFile,
    setDownloadLink,
    handleFileChange,
    getRootProps,
    getInputProps,
    isDragActive,
  };
}

export default useFileInput;
