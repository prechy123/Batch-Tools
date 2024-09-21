export interface Tools {
  id: number;
  name: string;
  description: string;
  backendPath: string;
  actionWord: string;
  acceptType?: string;
}

export const tools: Tools[] = [
  {
    id: 1,
    name: "PDF to Word Converter",
    description:
      "Convert PDF documents into editable Word files with accurate formatting.",
    backendPath: "/pdf-to-word/",
    actionWord: "Convert PDF to Word",
    acceptType: "application/pdf",
  },
  {
    id: 2,
    name: "Video to Audio Converter",
    description:
      "Extract audio from video files and save it as MP3 or other audio formats.",
    backendPath: "/video-to-audio/",
    actionWord: "Convert Video to Audio",
    acceptType: "video/*",
  },
  {
    id: 3,
    name: "Image Resizer",
    description:
      "Resize images to specific dimensions, ideal for social media or web use.",
    backendPath: "/image-resize/",
    actionWord: "Resize Image",
    acceptType: "image/*",
  },
  {
    id: 4,
    name: "Image Background Removal",
    description:
      "Automatically remove the background from images.",
    backendPath: "/remove-background/",
    actionWord: "Remove Background",
    acceptType: "image/*",
  },
  {
    id: 5,
    name: "QR Code Generator",
    description:
      "Create custom QR codes that link to websites, files, or other information.",
    backendPath: "/generate-qr-code/",
    actionWord: "Generate QR code",
  },
  {
    id: 6,
    name: "Video Transcriber",
    description:
      "Transcribe videos into text, with precise time stamps for each segment.",
    backendPath: "/video-transcriber/",
    actionWord: "Transcribe Video",
    acceptType: "video/*",
  },
  {
    id: 7,
    name: "Youtube Downloader",
    description:
      "Allows users to download videos from YouTube directly to their devices",
    backendPath: "/download-youtube/",
    actionWord: "Load Video",
  },
  // {
  //   id: 8,
  //   name: "Mov to MP4 Converter",
  //   description: "Convert MOV video files to the widely supported MP4 format.",
  //   backendPath: "/convert-mov-to-mp4/",
  //   actionWord: "Convert Video",
  //   acceptType: "video/*"
  // },
  {
    id: 9,
    name: "PDF Merger",
    description: "Combine multiple PDF files into one quickly and easily.",
    backendPath: "/merge-pdfs/",
    actionWord: "Combine PDFs",
    acceptType: "application/pdf"
  },
  // {
  //   id: 10,
  //   name: "PDF Splitter",
  //   description: "Our online PDF splitter provides a quick and simple way to separate a PDF into individual pages or sections",
  //   backendPath: "/split-pdf/",
  //   actionWord: "Split PDF",
  //   acceptType: "application/pdf"
  // },
  {
    id: 11,
    name: "PDF to JPG Converter",
    description: "Transform PDF pages into high-quality JPG images effortlessly.",
    backendPath: "/convert-pdf-to-jpg/",
    actionWord: "Convert PDF to JPG",
    acceptType: "application/pdf"
  },
  // {
  //   id: 12,
  //   name: "JPG to PDF Converter",
  //   description: "Convert multiple JPG to PDF files quickly and easily.",
  //   backendPath: "/convert-jpg-to-pdf/",
  //   actionWord: "Convert to PDF",
  //   acceptType: "image/*"
  // },
  {
    id: 13,
    name: "HTML to PDF Converter",
    description: "Convert your Webpage to PDF files quickly and easily.",
    backendPath: "/html-to-pdf/",
    actionWord: "Convert to PDF"
  },
  {
    id: 14,
    name: "JSON to CSV",
    description: "Convert your JSON data to CSV files quickly and effortlessly.",
    backendPath: "/json-to-csv/",
    actionWord: "Convert to CSV",
  }
];
