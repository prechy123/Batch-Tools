interface tools {
  id: number;
  name: string;
  description: string;
  backendPath: string;
  actionWord: string;
  acceptType?: string;
}

export const tools: tools[] = [
  {
    id: 1,
    name: "PDF to Word Converter",
    description:
      "Convert PDF documents into editable Word files with accurate formatting.",
    backendPath: "/pdf-to-word",
    actionWord: "Convert PDF to Word",
    acceptType: "application/pdf",
  },
  {
    id: 2,
    name: "Video to Audio Converter",
    description:
      "Extract audio from video files and save it as MP3 or other audio formats.",
    backendPath: "/video-to-audio",
    actionWord: "Convert Video to Audio",
    acceptType: "video/*",
  },
  {
    id: 3,
    name: "Image Resizer",
    description:
      "Resize images to specific dimensions, ideal for social media or web use.",
    backendPath: "/image-resize",
    actionWord: "Resize Image",
    acceptType: "image/*",
  },
  {
    id: 4,
    name: "Image Background Removal",
    description:
      "Automatically remove the background from images, perfect for product photos or creative projects.",
    backendPath: "/remove-background",
    actionWord: "Remove Background",
    acceptType: "image/*",
  },
  {
    id: 5,
    name: "QR Code Generator",
    description:
      "Create custom QR codes that link to websites, files, or other information.",
    backendPath: "/generate-qr-code",
    actionWord: "Generate QR code",
  },
  {
    id: 6,
    name: "Video Transcriber with Real Segment Time Calculation",
    description:
      "Transcribe videos into text, with precise time stamps for each segment.",
    backendPath: "/video-transcriber",
    actionWord: "Transcribe Video",
    acceptType: "video/*",
  },
  {
    id: 7,
    name: "Youtube Downloader",
    description:
      "Allows users to download videos from YouTube directly to their devices",
    backendPath: "/download-youtube",
    actionWord: "Load Video",
  },
];
