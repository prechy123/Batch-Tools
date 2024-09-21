import {
  handleBackgroundRemover,
  handleHtmlToPdfConverter,
  handleImageResizer,
  handleMovToMp4Converter,
  handlePdfMerger,
  handlePdfToJpegConverter,
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
  file?: File | null;
  files?: FileList | null;
  url?: string;
  currentTool: Tools | undefined;
  setDownloadLink: (link: string | null) => void;
  width?: string;
  height?: string;
  setImageLink?: (link: string | null) => void;
}

interface Image {
  page_number: number;
  image_data: string;
}

function useServerHandler({
  toolName,
  file,
  files,
  url,
  currentTool,
  setDownloadLink,
  width,
  height,
  setImageLink,
}: UseServerHandler) {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<Image[] | []>([]);

  async function handleSubmit() {
    setLoading(true);
    if (!file && !url && !files) {
      alert("Please select a file first!");
      setLoading(false);
      return;
    }
    if (files && files?.length <= 1) {
      alert("Please select more than 1 pdf");
      setLoading(false);
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
        case "PDF Merger":
          setFileName("Merged_PDF.pdf");
          await handlePdfMerger(
            files,
            currentTool,
            setDownloadLink,
            setLoading
          );
          break;
        case "PDF to JPG Converter":
          setFileName("Converted_file.jpg");
          await handlePdfToJpegConverter(
            file,
            currentTool,
            setImages,
            setLoading
          );
          break;
        case "HTML to PDF Converter":
          setFileName("Converted_Webpage.pdf");
          await handleHtmlToPdfConverter(
            url,
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
  return { fileName, setFileName, loading, handleSubmit, images, setImages };
}

export default useServerHandler;
