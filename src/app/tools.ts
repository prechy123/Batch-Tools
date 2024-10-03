export interface Tools {
  id: number;
  name: string;
  description: string;
  backendPath: string;
  actionWord: string;
  acceptType?: string;
  help: string;
  ogImage: string;
}

export interface UpcomingTools {
  id: number;
  name: string;
  description: string;
}

export const tools: Tools[] = [
  {
    id: 1,
    name: "PDF-to-Word-Converter",
    description:
      "Convert PDF documents into editable Word files with accurate formatting.",
    backendPath: "/pdf-to-word/",
    actionWord: "Convert PDF to Word",
    acceptType: "application/pdf",
    help: "<h4>How to Use the PDF-to-Word Converter Tool:</h4><br /><ol><li><strong>Upload Your PDF File:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your PDF document into the upload area.</li><br /><li>Make sure the file is in PDF format (supported type: <code>application/pdf</code>).</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>Once the PDF is uploaded, click the <strong>Convert PDF to Word</strong> button to begin the process.</li><br /><li>The tool will convert your PDF document into an editable Word file while preserving accurate formatting.</li><br /></ul></li><li><strong>Download the Word File:</strong><ul><li>After conversion, a download link for the Word file (.docx) will appear.</li><br /><li>Click the link to download your converted document.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure that your PDF contains editable text (not scanned images) for the best conversion accuracy.</li><br /><li>The converter works best with PDFs containing standard text formatting and layout.</li></ul></li></ol>",
    ogImage: "/og/pdfToWord.jpg"
  },
  {
    id: 2,
    name: "Video-to-Audio-Converter",
    description:
      "Extract audio from video files and save it as MP3 or other audio formats.",
    backendPath: "/video-to-audio/",
    actionWord: "Convert Video to Audio",
    acceptType: "video/*",
    help: "<h4>How to Use the Video-to-Audio Converter Tool:</h4><br /><ol><li><strong>Upload Your Video File:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your video file into the upload area.</li><br /><li>Ensure the file is in a supported video format (accepted type: <code>video/*</code>).</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>Once the video is uploaded, click the <strong>'Convert Video to Audio'</strong> button to begin the process.</li><br /><li>The tool will extract the audio from your video and save it in your desired format.</li><br /></ul></li><li><strong>Download the Audio File:</strong><ul><li>After conversion, a download link for the audio file (e.g., .mp3) will appear.</li><br /><li>Click the link to download your extracted audio.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Make sure your video contains audio for the best results.</li><br /><li>The converter supports various audio formats; choose the one that suits your needs.</li><br /></ul></li></ol>",
    ogImage: "/og/videoToAudio.jpg"
  },
  {
    id: 3,
    name: "Image-Resizer",
    description:
      "Resize images to specific dimensions, ideal for social media or web use.",
    backendPath: "/image-resize/",
    actionWord: "Resize Image",
    acceptType: "image/*",
    help: "<h4>How to Use the Image Resizer Tool:</h4><br /><ol><li><strong>Upload Your Image:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your image file into the upload area.</li><br /><li>Ensure the file is in a supported image format (accepted type: <code>image/*</code>).</li><br /></ul></li><li><strong>Specify Dimensions:</strong><ul><li>Enter the desired width and height for your resized image in the respective input fields.</li><br /><li>You can also choose to maintain the aspect ratio if required.</li><br /></ul></li><li><strong>Start the Resizing:</strong><ul><li>Once the image is uploaded and dimensions specified, click the <strong>'Resize Image'</strong> button to begin the process.</li><br /><li>The tool will resize your image according to the specified dimensions.</li><br /></ul></li><li><strong>Download the Resized Image:</strong><ul><li>After resizing, a download link for the resized image will appear.</li><br /><li>Click the link to download your resized image.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure your image dimensions are appropriate for your intended use (e.g., social media, website).</li><br /><li>Higher resolutions may take longer to process.</li><br /></ul></li></ol>",
    ogImage: "/og/imageResizer.jpg"
  },
  {
    id: 4,
    name: "Image-Background-Removal",
    description: "Automatically remove the background from images.",
    backendPath: "/remove-background/",
    actionWord: "Remove Background",
    acceptType: "image/*",
    help: "<h4>How to Use the Image Background Removal Tool:</h4><br /><ol><li><strong>Upload Your Image:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your image file into the upload area.</li><br /><li>Ensure the file is in a supported image format (accepted type: <code>image/*</code>).</li><br /></ul></li><li><strong>Start Background Removal:</strong><ul><li>Once the image is uploaded, click the <strong>'Remove Background'</strong> button to initiate the process.</li><br /><li>The tool will automatically analyze the image and remove the background.</li><br /></ul></li><li><strong>Download the Processed Image:</strong><ul><li>After the background removal is complete, a download link for the processed image will appear.</li><br /><li>Click the link to download your image without a background.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>The tool works best with images that have a clear subject and background.</li><br /><li>Results may vary depending on the complexity of the image.</li><br /></ul></li></ol>",
    ogImage: "/og/imageBackgroundRemoval.jpg"
  },
  {
    id: 5,
    name: "QR-Code-Generator",
    description:
      "Create custom QR codes that link to websites, files, or other information.",
    backendPath: "/generate-qr-code/",
    actionWord: "Generate QR code",
    help: "<h4>How to Use the QR Code Generator Tool:</h4><br /><ol><li><strong>Enter Your Information:</strong><ul><li>In the provided input field, enter the URL, text, or information you want the QR code to link to.</li><br /></ul></li><li><strong>Generate the QR Code:</strong><ul><li>Click the <strong>'Generate QR Code'</strong> button to create your QR code.</li><br /><li>The tool will generate a QR code based on the information you provided.</li><br /></ul></li><li><strong>Download the QR Code:</strong><ul><li>After generation, a download link for the QR code will appear.</li><br /><li>Click the link to download your custom QR code.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Make sure the information entered is accurate, as the QR code will link directly to it.</li><br /><li>Test the QR code with a QR code scanner to ensure it works as intended.</li><br /></ul></li></ol>",
    ogImage: "/og/qrCode.jpg"
  },
  {
    id: 6,
    name: "Video-Transcriber",
    description:
      "Transcribe videos into text, with precise time stamps for each segment.",
    backendPath: "/video-transcriber/",
    actionWord: "Transcribe Video",
    acceptType: "video/*",
    help: "<h4>How to Use the Video Transcriber Tool:</h4><br /><ol><li><strong>Upload Your Video:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your video file into the upload area.</li><br /><li>Ensure the file is in a supported video format (accepted type: <code>video/*</code>).</li><br /></ul></li><li><strong>Start Transcription:</strong><ul><li>Once the video is uploaded, click the <strong>'Transcribe Video'</strong> button to begin the transcription process.</li><br /><li>The tool will analyze the video and transcribe the audio into text.</li><br /></ul></li><li><strong>View and Edit Transcription:</strong><ul><li>After the transcription is complete, the text will be displayed with precise time stamps for each segment.</li><br /><li>You can edit the transcription if needed for accuracy.</li><br /></ul></li><li><strong>Download the Transcription:</strong><ul><li>Once satisfied with the transcription, click the download link to save the text file.</li><br /><li>The file will contain the transcribed text along with time stamps.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure your video has clear audio for the best transcription results.</li><br /><li>The accuracy may vary based on the clarity of speech and background noise.</li><br /></ul></li></ol>",
    ogImage: "/og/videoTranscriber.jpg"
  },
  // {
  //   id: 7,
  //   name: "Youtube-Downloader",
  //   description:
  //     "Allows users to download videos from YouTube directly to their devices",
  //   backendPath: "/download-youtube/",
  //   actionWord: "Load Video",
  // },
  // {
  //   id: 8,
  //   name: "Mov-to-MP4-Converter",
  //   description: "Convert MOV video files to the widely supported MP4 format.",
  //   backendPath: "/convert-mov-to-mp4/",
  //   actionWord: "Convert Video",
  //   acceptType: "video/*"
  // },
  {
    id: 9,
    name: "PDF-Merger",
    description: "Combine multiple PDF files into one quickly and easily.",
    backendPath: "/merge-pdfs/",
    actionWord: "Combine PDFs",
    acceptType: "application/pdf",
    help: "<h4>How to Use the PDF Merger Tool:</h4><br /><ol><li><strong>Upload Your PDF Files:</strong><ul><li>Click the 'Click to Upload' button or drag and drop multiple PDF files into the upload area.</li><br /><li>Ensure all files are in the supported format (accepted type: <code>application/pdf</code>).</li><br /></ul></li><li><strong>Arrange Your PDFs:</strong><ul><li>You can rearrange the order of the files by dragging them into your preferred sequence.</li><br /></ul></li><li><strong>Start Merging:</strong><ul><li>Once the files are uploaded and arranged, click the <strong>'Combine PDFs'</strong> button to merge your documents.</li><br /><li>The tool will combine all selected PDF files into a single document.</li><br /></ul></li><li><strong>Download the Merged PDF:</strong><ul><li>After merging, a download link for the combined PDF will appear.</li><br /><li>Click the link to download your new PDF file.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>The tool supports multiple files, so feel free to combine as many PDFs as needed.</li><br /><li>Check the final document for accuracy after merging.</li><br /></ul></li></ol>",
    ogImage: "/og/pdfMerger.jpg"
  },
  // {
  //   id: 10,
  //   name: "PDF-Splitter",
  //   description: "Our online PDF splitter provides a quick and simple way to separate a PDF into individual pages or sections",
  //   backendPath: "/split-pdf/",
  //   actionWord: "Split PDF",
  //   acceptType: "application/pdf"
  // },
  {
    id: 11,
    name: "PDF-to-JPG-Converter",
    description:
      "Transform PDF pages into high-quality JPG images effortlessly.",
    backendPath: "/convert-pdf-to-jpg/",
    actionWord: "Convert PDF to JPG",
    acceptType: "application/pdf",
    help: "<h4>How to Use the PDF to JPG Converter Tool:</h4><br /><ol><li><strong>Upload Your PDF Document:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your PDF file into the upload area.</li><br /><li>Ensure the file is in the supported format (accepted type: <code>application/pdf</code>).</li><br /></ul></li><li><strong>Select Pages to Convert:</strong><ul><li>You can choose to convert all pages or select specific pages from your PDF document.</li><br /></ul></li><li><strong>Start Conversion:</strong><ul><li>After selecting your pages, click the <strong>'Convert PDF to JPG'</strong> button to initiate the conversion process.</li><br /><li>The tool will transform the selected PDF pages into high-quality JPG images.</li><br /></ul></li><li><strong>Download the JPG Images:</strong><ul><li>Once the conversion is complete, a download link for the JPG images will appear.</li><br /><li>Click the link to download your images in JPG format.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>The quality of the images may depend on the original PDF content and resolution.</li><br /><li>Make sure to review the JPG images after download to ensure they meet your expectations.</li><br /></ul></li></ol>",
    ogImage: "/og/pdfToJpg.jpg"
  },
  // {
  //   id: 12,
  //   name: "JPG-to-PDF-Converter",
  //   description: "Convert multiple JPG to PDF files quickly and easily.",
  //   backendPath: "/convert-jpg-to-pdf/",
  //   actionWord: "Convert to PDF",
  //   acceptType: "image/*"
  // },
  {
    id: 13,
    name: "HTML-to-PDF-Converter",
    description: "Convert your Webpage to PDF files quickly and easily.",
    backendPath: "/html-to-pdf/",
    actionWord: "Convert to PDF",
    help: "<h4>How to Use the HTML to PDF Converter Tool:</h4><br /><ol><li><strong>Enter Your Webpage URL:</strong><ul><li>In the provided input field, enter the URL of the webpage you want to convert to a PDF file.</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>After entering the URL, click the <strong>'Convert to PDF'</strong> button to begin the conversion process.</li><br /><li>The tool will fetch the webpage and convert it into a PDF document.</li><br /></ul></li><li><strong>Download Your PDF:</strong><ul><li>Once the conversion is complete, a download link for the PDF file will appear.</li><br /><li>Click the link to download your converted PDF document.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure the URL entered is valid and publicly accessible for the conversion to work.</li><br /><li>Review the final PDF to confirm that the content has been converted accurately.</li><br /></ul></li></ol>",
    ogImage: "/og/htmlToPdf.jpg"
  },
  {
    id: 14,
    name: "JSON-to-CSV",
    description:
      "Convert your JSON data to CSV files quickly and effortlessly.",
    backendPath: "/json-to-csv/",
    actionWord: "Convert to CSV",
    help: "<h4>How to Use the JSON to CSV Converter Tool:</h4><br /><ol><li><strong>Enter Your JSON text:</strong><ul><li>In the provided input field, enter the provided text.</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>After the file is uploaded, click the <strong>'Convert to CSV'</strong> button to begin the conversion process.</li><br /><li>The tool will convert your JSON data into a CSV file.</li><br /></ul></li><li><strong>Download Your CSV File:</strong><ul><li>Once the conversion is complete, a download link for the CSV file will appear.</li><br /><li>Click the link to download your converted CSV document.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure your JSON data is well-structured for accurate conversion.</li><br /><li>Review the final CSV to confirm that the data has been converted correctly.</li><br /></ul></li></ol>",
    ogImage: "/og/jsonToCsv.jpg"
  },
  {
    id: 15,
    name: "Note-Summarizer",
    description:
      "Create a concise summary for your lengthy notes",
    backendPath: "/summarize-note-file/",
    actionWord: "Create Summary",
    help: "<h4>How to Use the Note Summarizer Tool:</h4><br /><ol><li><strong>Upload Your Notes:</strong><ul><li>In the provided input field, upload or paste your lengthy notes that you want to summarize.</li><br /></ul></li><li><strong>Start the Summarization:</strong><ul><li>Click the <strong>'Create Summary'</strong> button to begin the summarization process.</li><br /><li>The tool will analyze your notes and generate a concise summary.</li><br /></ul></li><li><strong>Download or Review Your Summary:</strong><ul><li>Once the summarization is complete, a text area or download link for the summary will appear.</li><br /><li>You can review or download the summarized notes for future use.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure that your notes are well-structured for accurate summarization.</li><br /><li>Review the final summary to ensure it captures the key points effectively.</li><br /></ul></li></ol>",
    acceptType: ".pdf, .docx, .txt, .pptx",
    ogImage: "/og/noteSummarizer.jpg"
  }
];

export const upComingTools: UpcomingTools[] = [
  {
    id: 1,
    name: "Note Summarizer",
    description: "Compress long-form text into concise summaries",
  },
  {
    id: 2,
    name: "Text Paraphraser",
    description:
      "Allows users to rephrase text while maintaining original meaning",
  },
  {
    id: 3,
    name: "Voice-Cloner",
    description:
      "Clone voices effortlessly and with precision in just a few clicks.",
  },
  {
    id: 4,
    name: "Youtube-Downloader",
    description:
      "Allows users to download videos from YouTube directly to their devices",
  },
  {
    id: 5,
    name: "Mov-to-MP4-Converter",
    description: "Convert MOV video files to the widely supported MP4 format.",
  },
];
