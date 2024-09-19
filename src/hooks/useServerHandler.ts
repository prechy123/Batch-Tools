import {
  handleBackgroundRemover,
  handleImageResizer,
  handleMovToMp4Converter,
  handlePdfToWord,
  handleQRCodeGenerator,
  handleVideoToAudio,
  handleVideoTranscriber,
  handleYoutubeDownloader,
} from "@/app/tool/[tool]/apiService";
import { showToast } from "@/utils/ShowToast";
import { useState } from "react";
import type { Tools } from "@/app/tools";

interface UseServerHandler {
  toolName: string | undefined;
  file: File | null;
  url: string;
  currentTool: Tools | undefined;
  setDownloadLink: (link: string | null) => void;
  width: string;
  height: string;
  setImageLink: (link: string | null) => void;
}

function useServerHandler({
  toolName,
  file,
  url,
  currentTool,
  setDownloadLink,
  width,
  height,
  setImageLink,
}: UseServerHandler) {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    if (!file && !url) {
      alert("Please select a file first!");
      setLoading(false)
      return;
    }

    try {
      switch (toolName) {
        case "PDF to Word Converter":
          setFileName(`converted_${file?.name.replace(".pdf", ".docx")}`);
          await handlePdfToWord(file, currentTool, setDownloadLink, setLoading);
          break;
        case "Video to Audio Converter":
          setFileName("converted_audio.mp3");
          await handleVideoToAudio(
            file,
            currentTool,
            setDownloadLink,
            setLoading
          );
          break;
        case "Image Resizer":
          setFileName("resized_image.jpg");
          await handleImageResizer(
            file,
            width,
            height,
            currentTool,
            setDownloadLink,
            setImageLink,
            setLoading
          );
          break;
        case "Image Background Removal":
          setFileName("background_removed.png");
          await handleBackgroundRemover(
            file,
            currentTool,
            setDownloadLink,
            setImageLink,
            setLoading
          );
          break;
        case "QR Code Generator":
          setFileName("generated_qr_code.png");
          await handleQRCodeGenerator(
            url,
            currentTool,
            setDownloadLink,
            setImageLink,
            setLoading
          );
          break;
        case "Video Transcriber with Real Segment Time Calculation":
          setFileName("transcription.srt");
          await handleVideoTranscriber(
            file,
            currentTool,
            setDownloadLink,
            setLoading
          );
          break;
        case "Youtube Downloader":
          setFileName("Downloaded_youtube_video.mp4");
          await handleYoutubeDownloader(
            url,
            currentTool,
            setDownloadLink,
            setLoading
          );
          break;
        case "Mov to MP4 Converter":
          setFileName("Converted_video.mp4");
          await handleMovToMp4Converter(
            file,
            currentTool,
            setDownloadLink,
            setLoading
          );
          break;
        default:
          setFileName("converted_file");
          break;
      }
    } catch (err) {
      setLoading(false);
      console.error("Error while sending the file:", err);
      showToast("error", "Something went wrong, try again later");
    }
  }
  return { fileName, setFileName, loading, handleSubmit };
}

export default useServerHandler;
