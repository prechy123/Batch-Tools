export interface Tools {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
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
    fullDescription:
      "The Batch Tools PDF-to-Word Converter is a powerful and user-friendly tool designed to transform static PDF documents into editable Word files (.docx) while preserving the original formatting. This innovative feature of Batch Tools is particularly beneficial for users who need to modify text, adjust layout, or change design elements within a PDF without sacrificing the structured format of the document. Whether you’re in the business sector, pursuing educational goals, or handling personal projects, the Batch Tools PDF-to-Word Converter caters to all your needs. It guarantees that critical elements such as tables, images, and fonts are accurately transferred during the conversion process, minimizing the hassle of manual reformatting afterward. With Batch Tools, you can efficiently edit your documents and enhance productivity without the frustration typically associated with PDF modifications. The versatility of the Batch Tools PDF-to-Word Converter makes it an ideal solution for anyone seeking to streamline their workflow. Users can easily upload their PDF files to Batch Tools, initiate the conversion, and download the edited Word documents in just a few clicks. Say goodbye to tedious reformatting and hello to seamless document editing with Batch Tools. In summary, if you're looking for a reliable way to convert PDFs into editable Word files, the Batch Tools PDF-to-Word Converter is your go-to solution. Experience the convenience and efficiency of Batch Tools today and take the first step toward hassle-free document editing.",
    backendPath: "/pdf-to-word/",
    actionWord: "Convert PDF to Word",
    acceptType: "application/pdf",
    help: "<h4>How to Use the PDF-to-Word Converter Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your PDF File:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your PDF document into the upload area.</li><br /><li>Make sure the file is in PDF format (supported type: <code>application/pdf</code>).</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>Once the PDF is uploaded, click the <strong>Convert PDF to Word</strong> button to begin the process.</li><br /><li>The tool will convert your PDF document into an editable Word file while preserving accurate formatting.</li><br /></ul></li><li><strong>Download the Word File:</strong><ul><li>After conversion, a download link for the Word file (.docx) will appear.</li><br /><li>Click the link to download your converted document.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure that your PDF contains editable text (not scanned images) for the best conversion accuracy.</li><br /><li>The converter works best with PDFs containing standard text formatting and layout.</li></ul></li></ol>",
    ogImage: "/og/pdfToWord.jpg",
  },
  {
    id: 2,
    name: "Video-to-Audio-Converter",
    description:
      "Extract audio from video files and save it as MP3 or other audio formats.",
    fullDescription:
      "This tool from Batch Tools enables users to easily extract audio tracks from various video formats and save them as standalone audio files, such as MP3. Ideal for pod casters, musicians, content creators, or anyone who wants to separate the audio from a video for personal or professional use, the Batch Tools audio extraction feature supports multiple video formats including MP4, AVI, and MOV. It allows users to select the desired audio format output, making it perfect for creating podcast episodes, extracting music for personal playlists, or saving important audio from video lectures or interviews for future reference. With Batch Tools, you can effortlessly convert and manage your audio needs, ensuring high-quality results every time while maintaining the integrity of the original sound. This user-friendly tool simplifies the audio extraction process, making it accessible for users at all levels, from beginners to experienced professionals. Experience the power and convenience of the Batch Tools audio extraction tool today and transform your video content into valuable audio files with ease!",
    backendPath: "/video-to-audio/",
    actionWord: "Convert Video to Audio",
    acceptType: "video/*",
    help: "<h4>How to Use the Video-to-Audio Converter Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your Video File:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your video file into the upload area.</li><br /><li>Ensure the file is in a supported video format (accepted type: <code>video/*</code>).</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>Once the video is uploaded, click the <strong>'Convert Video to Audio'</strong> button to begin the process.</li><br /><li>The tool will extract the audio from your video and save it in your desired format.</li><br /></ul></li><li><strong>Download the Audio File:</strong><ul><li>After conversion, a download link for the audio file (e.g., .mp3) will appear.</li><br /><li>Click the link to download your extracted audio.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Make sure your video contains audio for the best results.</li><br /><li>The converter supports various audio formats; choose the one that suits your needs.</li><br /></ul></li></ol>",
    ogImage: "/og/videoToAudio.jpg",
  },
  {
    id: 3,
    name: "Image-Resizer",
    description:
      "Resize images to specific dimensions, ideal for social media or web use.",
    fullDescription:
      "The Image Resizer tool from Batch Tools offers a user-friendly solution that allows users to easily resize their images to meet specific dimension requirements. Whether you are preparing images for social media platforms, optimizing visuals for websites, or working on graphic design projects, this powerful tool helps you optimize image dimensions without losing quality. With Batch Tools, you have the flexibility to maintain aspect ratios or customize dimensions freely, ensuring that your images look stunning across various digital platforms. The Batch Tools Image Resizer tool supports a wide range of image formats, making it a versatile solution for creators, marketers, and developers alike. By using Batch Tools, you can effortlessly enhance your workflow and achieve professional-looking results with ease. Experience the convenience of resizing your images effectively with the Batch Tools Image Resizer today and elevate your digital content to the next level!",
    backendPath: "/image-resize/",
    actionWord: "Resize Image",
    acceptType: "image/*",
    help: "<h4>How to Use the Image Resizer Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your Image:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your image file into the upload area.</li><br /><li>Ensure the file is in a supported image format (accepted type: <code>image/*</code>).</li><br /></ul></li><li><strong>Specify Dimensions:</strong><ul><li>Enter the desired width and height for your resized image in the respective input fields.</li><br /><li>You can also choose to maintain the aspect ratio if required.</li><br /></ul></li><li><strong>Start the Resizing:</strong><ul><li>Once the image is uploaded and dimensions specified, click the <strong>'Resize Image'</strong> button to begin the process.</li><br /><li>The tool will resize your image according to the specified dimensions.</li><br /></ul></li><li><strong>Download the Resized Image:</strong><ul><li>After resizing, a download link for the resized image will appear.</li><br /><li>Click the link to download your resized image.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure your image dimensions are appropriate for your intended use (e.g., social media, website).</li><br /><li>Higher resolutions may take longer to process.</li><br /></ul></li></ol>",
    ogImage: "/og/imageResizer.jpg",
  },
  {
    id: 4,
    name: "Image-Background-Removal",
    description: "Automatically remove the background from images.",
    fullDescription:
      "The Background Remover tool from Batch Tools is perfect for users who need to remove the background from images for graphic design, e-commerce, or other purposes. By utilizing advanced AI technology, the Batch Tools Background Remover analyzes the image and effectively separates the subject from the background, creating a clean, transparent background image. Whether you're preparing product photos for an online store, designing promotional materials, or enhancing your digital assets, this tool simplifies the process and delivers fast results with minimal manual adjustments. The Batch Tools Background Remover works seamlessly with various image formats and offers high accuracy for most photos, ensuring that your images look professional and polished. Experience the efficiency and effectiveness of the Batch Tools Background Remover today and take your graphic design projects to the next level!",
    backendPath: "/remove-background/",
    actionWord: "Remove Background",
    acceptType: "image/*",
    help: "<h4>How to Use the Image Background Removal Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your Image:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your image file into the upload area.</li><br /><li>Ensure the file is in a supported image format (accepted type: <code>image/*</code>).</li><br /></ul></li><li><strong>Start Background Removal:</strong><ul><li>Once the image is uploaded, click the <strong>'Remove Background'</strong> button to initiate the process.</li><br /><li>The tool will automatically analyze the image and remove the background.</li><br /></ul></li><li><strong>Download the Processed Image:</strong><ul><li>After the background removal is complete, a download link for the processed image will appear.</li><br /><li>Click the link to download your image without a background.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>The tool works best with images that have a clear subject and background.</li><br /><li>Results may vary depending on the complexity of the image.</li><br /></ul></li></ol>",
    ogImage: "/og/imageBackgroundRemoval.jpg",
  },
  {
    id: 5,
    name: "QR-Code-Generator",
    description:
      "Create custom QR codes that link to websites, files, or other information.",
    fullDescription:
      "The QR Code Generator tool from Batch Tools allows users to create scannable QR codes that can be used for a variety of purposes, including website links, contact details, product information, or event tickets. QR codes are a quick and efficient way to share information in our increasingly digital world, and the Batch Tools QR Code Generator makes it simple to generate customized codes with ease. This versatile tool is ideal for businesses, marketers, and developers who want to include QR codes on their print materials, websites, or applications. With Batch Tools, users can effortlessly design QR codes that not only serve a functional purpose but also align with their branding, enhancing their promotional efforts. Experience the convenience and efficiency of the Batch Tools QR Code Generator today and elevate your information-sharing capabilities!",
    backendPath: "/generate-qr-code/",
    actionWord: "Generate QR code",
    help: "<h4>How to Use the QR Code Generator Tool on Batch Tools:</h4><br /><ol><li><strong>Enter Your Information:</strong><ul><li>In the provided input field, enter the URL, text, or information you want the QR code to link to.</li><br /></ul></li><li><strong>Generate the QR Code:</strong><ul><li>Click the <strong>'Generate QR Code'</strong> button to create your QR code.</li><br /><li>The tool will generate a QR code based on the information you provided.</li><br /></ul></li><li><strong>Download the QR Code:</strong><ul><li>After generation, a download link for the QR code will appear.</li><br /><li>Click the link to download your custom QR code.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Make sure the information entered is accurate, as the QR code will link directly to it.</li><br /><li>Test the QR code with a QR code scanner to ensure it works as intended.</li><br /></ul></li></ol>",
    ogImage: "/og/qrCode.jpg",
  },
  {
    id: 6,
    name: "Video-Transcriber",
    description:
      "Transcribe videos into text, with precise time stamps for each segment.",
    fullDescription: "The Video Transcriber tool from Batch Tools automatically converts spoken content in video files into written text, streamlining the transcription process for users. It supports various video formats and utilizes advanced speech recognition technology to generate highly accurate transcriptions. This powerful tool is particularly useful for content creators, journalists, researchers, and businesses that need to produce subtitles, transcripts, or searchable text from video content. Whether you're looking to enhance accessibility, create documentation, or repurpose content for different platforms, the Batch Tools Video Transcriber provides a quick and efficient way to transform spoken dialogue into text while preserving time codes for easy reference. With Batch Tools, users can effortlessly manage their video content and ensure that important information is readily available in a written format, making it an invaluable resource for any project involving video.",
    backendPath: "/video-transcriber/",
    actionWord: "Transcribe Video",
    acceptType: "video/*",
    help: "<h4>How to Use the Video Transcriber Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your Video:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your video file into the upload area.</li><br /><li>Ensure the file is in a supported video format (accepted type: <code>video/*</code>).</li><br /></ul></li><li><strong>Start Transcription:</strong><ul><li>Once the video is uploaded, click the <strong>'Transcribe Video'</strong> button to begin the transcription process.</li><br /><li>The tool will analyze the video and transcribe the audio into text.</li><br /></ul></li><li><strong>View and Edit Transcription:</strong><ul><li>After the transcription is complete, the text will be displayed with precise time stamps for each segment.</li><br /><li>You can edit the transcription if needed for accuracy.</li><br /></ul></li><li><strong>Download the Transcription:</strong><ul><li>Once satisfied with the transcription, click the download link to save the text file.</li><br /><li>The file will contain the transcribed text along with time stamps.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure your video has clear audio for the best transcription results.</li><br /><li>The accuracy may vary based on the clarity of speech and background noise.</li><br /></ul></li></ol>",
    ogImage: "/og/videoTranscriber.jpg",
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
    fullDescription: "The PDF Merger tool from Batch Tools allows users to effortlessly combine multiple PDF documents into one cohesive file, making document management a breeze. This tool is ideal for users who need to consolidate reports, presentations, contracts, or any other important documents into a single, organized file. The Batch Tools PDF Merger ensures that the layout and content of each PDF are preserved during the merging process, providing a seamless experience for users. It can handle documents of varying sizes and lengths, accommodating a wide range of user needs. Whether for business or personal use, the Batch Tools PDF Merger simplifies document management by providing an easy-to-use interface for merging files quickly and efficiently. Experience the convenience of combining your PDF documents with the Batch Tools PDF Merger today, and enhance your productivity with this powerful tool!",
    backendPath: "/merge-pdfs/",
    actionWord: "Combine PDFs",
    acceptType: "application/pdf",
    help: "<h4>How to Use the PDF Merger Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your PDF Files:</strong><ul><li>Click the 'Click to Upload' button or drag and drop multiple PDF files into the upload area.</li><br /><li>Ensure all files are in the supported format (accepted type: <code>application/pdf</code>).</li><br /></ul></li><li><strong>Arrange Your PDFs:</strong><ul><li>You can rearrange the order of the files by dragging them into your preferred sequence.</li><br /></ul></li><li><strong>Start Merging:</strong><ul><li>Once the files are uploaded and arranged, click the <strong>'Combine PDFs'</strong> button to merge your documents.</li><br /><li>The tool will combine all selected PDF files into a single document.</li><br /></ul></li><li><strong>Download the Merged PDF:</strong><ul><li>After merging, a download link for the combined PDF will appear.</li><br /><li>Click the link to download your new PDF file.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>The tool supports multiple files, so feel free to combine as many PDFs as needed.</li><br /><li>Check the final document for accuracy after merging.</li><br /></ul></li></ol>",
    ogImage: "/og/pdfMerger.jpg",
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
    fullDescription: "The PDF-to-JPG Converter tool from Batch Tools extracts images from PDF documents or converts each page of the PDF into a high-quality JPG file, providing users with versatile options for handling their PDF content. This tool is perfect for users who need to use or share specific pages of a PDF as images, making it incredibly valuable for a variety of applications. Whether you’re creating image-based previews of documents, sharing pages on social media, or integrating PDF content into graphic design projects, the Batch Tools PDF-to-JPG Converter simplifies the process and enhances your workflow. The tool preserves the resolution and quality of the converted images, ensuring clarity and detail in every output. With Batch Tools, you can effortlessly convert your PDF documents into stunning JPG files, making it easier than ever to showcase your content in a visually appealing manner.",
    backendPath: "/convert-pdf-to-jpg/",
    actionWord: "Convert PDF to JPG",
    acceptType: "application/pdf",
    help: "<h4>How to Use the PDF to JPG Converter Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your PDF Document:</strong><ul><li>Click the 'Click to Upload' button or drag and drop your PDF file into the upload area.</li><br /><li>Ensure the file is in the supported format (accepted type: <code>application/pdf</code>).</li><br /></ul></li><li><strong>Select Pages to Convert:</strong><ul><li>You can choose to convert all pages or select specific pages from your PDF document.</li><br /></ul></li><li><strong>Start Conversion:</strong><ul><li>After selecting your pages, click the <strong>'Convert PDF to JPG'</strong> button to initiate the conversion process.</li><br /><li>The tool will transform the selected PDF pages into high-quality JPG images.</li><br /></ul></li><li><strong>Download the JPG Images:</strong><ul><li>Once the conversion is complete, a download link for the JPG images will appear.</li><br /><li>Click the link to download your images in JPG format.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>The quality of the images may depend on the original PDF content and resolution.</li><br /><li>Make sure to review the JPG images after download to ensure they meet your expectations.</li><br /></ul></li></ol>",
    ogImage: "/og/pdfToJpg.jpg",
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
    fullDescription: "The Web Page to PDF Converter tool from Batch Tools allows users to effortlessly convert web pages or HTML documents into PDF files while retaining the original layout, text, images, and formatting. This powerful tool is particularly useful for saving articles, invoices, or web-based reports in a professional and portable format, making it an essential resource for anyone who frequently works with online content. Developers and business professionals can utilize the Batch Tools Web Page to PDF Converter to create print-ready documents directly from web content, ensuring that the converted files maintain the visual fidelity of the original webpage. With Batch Tools, you can easily capture and preserve the essence of your web content, transforming it into high-quality PDF documents that are ready for sharing, printing, or archiving. Experience the convenience and efficiency of the Batch Tools Web Page to PDF Converter today and streamline your document creation process!",
    backendPath: "/html-to-pdf/",
    actionWord: "Convert to PDF",
    help: "<h4>How to Use the HTML to PDF Converter Tool on Batch Tools:</h4><br /><ol><li><strong>Enter Your Webpage URL:</strong><ul><li>In the provided input field, enter the URL of the webpage you want to convert to a PDF file.</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>After entering the URL, click the <strong>'Convert to PDF'</strong> button to begin the conversion process.</li><br /><li>The tool will fetch the webpage and convert it into a PDF document.</li><br /></ul></li><li><strong>Download Your PDF:</strong><ul><li>Once the conversion is complete, a download link for the PDF file will appear.</li><br /><li>Click the link to download your converted PDF document.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure the URL entered is valid and publicly accessible for the conversion to work.</li><br /><li>Review the final PDF to confirm that the content has been converted accurately.</li><br /></ul></li></ol>",
    ogImage: "/og/htmlToPdf.jpg",
  },
  {
    id: 14,
    name: "JSON-to-CSV",
    description:
      "Convert your JSON data to CSV files quickly and effortlessly.",
    fullDescription: "The JSON-to-CSV Converter tool from Batch Tools is specifically designed to convert JSON (JavaScript Object Notation) data into CSV (Comma Separated Values) format, making it significantly easier to import, analyze, and manipulate data in popular spreadsheet applications like Microsoft Excel or Google Sheets. Ideal for developers, data analysts, and researchers, the Batch Tools JSON-to-CSV Converter transforms complex JSON structures into a simplified tabular format, allowing users to efficiently work with their data. This tool is particularly useful for tasks such as data analysis, reporting, and integrating data into various data-processing workflows, enabling users to gain insights and make informed decisions based on their data. With Batch Tools, you can effortlessly convert your JSON data into a format that is not only easier to work with but also enhances your productivity and streamlines your data management processes. Experience the power and convenience of the Batch Tools JSON-to-CSV Converter today and take your data analysis to the next level!",
    backendPath: "/json-to-csv/",
    actionWord: "Convert to CSV",
    help: "<h4>How to Use the JSON to CSV Converter Tool on Batch Tools:</h4><br /><ol><li><strong>Enter Your JSON text:</strong><ul><li>In the provided input field, enter the provided text.</li><br /></ul></li><li><strong>Start the Conversion:</strong><ul><li>After the file is uploaded, click the <strong>'Convert to CSV'</strong> button to begin the conversion process.</li><br /><li>The tool will convert your JSON data into a CSV file.</li><br /></ul></li><li><strong>Download Your CSV File:</strong><ul><li>Once the conversion is complete, a download link for the CSV file will appear.</li><br /><li>Click the link to download your converted CSV document.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure your JSON data is well-structured for accurate conversion.</li><br /><li>Review the final CSV to confirm that the data has been converted correctly.</li><br /></ul></li></ol>",
    ogImage: "/og/jsonToCsv.jpg",
  },
  {
    id: 15,
    name: "Note-Summarizer",
    description: "Create a concise summary for your lengthy notes",
    fullDescription: "The Note Summarizer tool from Batch Tools is expertly designed to create concise and clear summaries of lengthy notes, helping users quickly distill essential information and improve their productivity. Utilizing advanced natural language processing algorithms, the Batch Tools Note Summarizer analyzes the content and extracts key points, making it ideal for students, professionals, and anyone looking to enhance their efficiency in managing information. Users can input their notes in various formats, and the Batch Tools tool will generate a summary that retains the original context while simplifying the information for easier understanding. This feature not only saves time but also aids in better comprehension and retention of crucial details, allowing users to focus on what truly matters. The Batch Tools Note Summarizer is an invaluable resource for anyone needing to manage large volumes of information efficiently, transforming the way you handle and process your notes. Experience the convenience and effectiveness of the Batch Tools Note Summarizer today and take control of your information management!",
    backendPath: "/summarize-note-file/",
    actionWord: "Create Summary",
    help: "<h4>How to Use the Note Summarizer Tool on Batch Tools:</h4><br /><ol><li><strong>Upload Your Notes:</strong><ul><li>In the provided input field, upload or paste the lengthy notes you want to summarize.</li><br /></ul></li><li><strong>Start the Summarization:</strong><ul><li>Click the <strong>'Create Summary'</strong> button to initiate the summarization process.</li><br /><li>The tool will analyze your notes and generate a concise summary.</li><br /></ul></li><li><strong>Download or Review Your Summary:</strong><ul><li>Once the summarization is complete, a text area or download link for the summary will appear.</li><br /><li>You can review or download the summarized notes for future use.</li><br /></ul></li><li><strong>Important Notes:</strong><ul><li>Ensure that your notes are well-structured for accurate summarization.</li><br /><li>The summarizer can be used to summarize short notes and documents without images.</li><br /><li>Cross-check the final summary to confirm that it accurately captures the key points.</li><br /></ul></li></ol>",
    acceptType: ".pdf, .docx, .txt, .pptx",
    ogImage: "/og/noteSummarizer.jpg",
  },
];

export const upComingTools: UpcomingTools[] = [
  {
    id: 1,
    name: "Text Paraphraser",
    description:
      "Allows users to rephrase text while maintaining original meaning",
  },
  {
    id: 2,
    name: "Voice-Cloner",
    description:
      "Clone voices effortlessly and with precision in just a few clicks.",
  },
  {
    id: 3,
    name: "Youtube-Downloader",
    description:
      "Allows users to download videos from YouTube directly to their devices",
  },
  {
    id: 4,
    name: "Mov-to-MP4-Converter",
    description: "Convert MOV video files to the widely supported MP4 format.",
  },
];
