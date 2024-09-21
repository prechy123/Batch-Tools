/* eslint-disable @typescript-eslint/no-explicit-any */
import { showToast } from "@/utils/ShowToast";

export async function handlePdfToWord(
  file: any,
  currentTool: any,
  setDownloadLink: any,
  setLoading: any
) {
  const reader: any = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
    const base64FileData = reader?.result?.split(",")[1]; // get the base64 part without the data URI prefix
    const fileName = file.name;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_name: fileName,
          file_data: base64FileData, // the base64-encoded file content
        }),
      }
    );
    if (response.ok) {
      // Handle file download
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadLink(url);
      showToast("success", "Successfully converted, Press download button");
      setLoading(false);
    } else {
      setLoading(false);
      // const errorData = await response.json();
      showToast("error", "Something went wrong, try again later");
    }
  };
}

export async function handleVideoToAudio(
  file: any,
  currentTool: any,
  setDownloadLink: any,
  setLoading: any
) {
  const formData = new FormData();
  formData.append("video_file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    // Handle success, set the download link for the audio file
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    showToast("success", "Successfully converted, Press download button");
    setLoading(false);
  } else {
    const errorText = await response.text();
    console.error("Error converting video to audio:", errorText);
    showToast("error", "Something went wrong, try again later");
    setLoading(false);
  }
}

export async function handleImageResizer(
  file: any,
  width: any,
  height: any,
  currentTool: any,
  setDownloadLink: any,
  setImageLink: any,
  setLoading: any
) {
  const formData = new FormData();
  formData.append("image_file", file);
  formData.append("width", width);
  formData.append("height", height);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    setImageLink(url);
    showToast("success", "Successfully resized, Press download button");
    setLoading(false);
  } else {
    showToast("error", "Something went wrong, try again later");
    setLoading(false);
  }
}

export async function handleBackgroundRemover(
  file: any,
  currentTool: any,
  setDownloadLink: any,
  setImageLink: any,
  setLoading: any
) {
  const formData = new FormData();
  formData.append("image_file", file);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    setImageLink(url);
    showToast(
      "success",
      "Successfully removed background, Press download button"
    );
    setLoading(false);
  } else {
    showToast("error", "Something went wrong, try again later");
    setLoading(false);
  }
}

export async function handleQRCodeGenerator(
  qrUrl: any,
  currentTool: any,
  setDownloadLink: any,
  setImageLink: any,
  setLoading: any
) {
  const formData = new FormData();
  formData.append("data", qrUrl);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    setImageLink(url);
    showToast(
      "success",
      "Successfully generated qr code, Press download button"
    );
    setLoading(false);
  } else {
    const errorText = await response.text();
    console.error("Error generating QR code:", errorText);
    showToast("error", "Something went wrong, try again later");
    setLoading(false);
  }
}

export async function handleVideoTranscriber(
  file: any,
  currentTool: any,
  setDownloadLink: any,
  setLoading: any
) {
  const formData = new FormData();
  formData.append("video_file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    showToast("success", "Successfully transcribed, Press download button");
    setLoading(false);
  } else {
    const errorText = await response.text();
    console.error("Error transcribing video:", errorText);
    showToast("error", "Something went wrong, try again later");
    setLoading(false);
  }
}

export async function handleYoutubeDownloader(
  videoUrl: any,
  currentTool: any,
  setDownloadLink: any,
  setLoading: any
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ video_url: videoUrl }),
    }
  );
  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(
      new Blob([blob], { type: "video/mp4" })
    );
    setDownloadLink(url);
    showToast("success", "Successfully converted, Press download button");
    setLoading(false);
  } else {
    const errorText = await response.text();
    console.error("Error transcribing video:", errorText);
    showToast("error", "Something went wrong, try again later");
    setLoading(false);
  }
}

export async function handleMovToMp4Converter(
  file: any,
  currentTool: any,
  setDownloadLink: any,
  setLoading: any
) {
  const formData = new FormData();
  formData.append("video_file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      body: formData,
    }
  );
  if (response.ok) {
    // Handle file download
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    showToast("success", "Successfully converted, Press download button");
    setLoading(false);
  } else {
    setLoading(false);
    // const errorData = await response.json();
    showToast("error", "Something went wrong, try again later");
  }
}

export async function handlePdfMerger(
  files: any,
  currentTool: any,
  setDownloadLink: any,
  setLoading: any
) {
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("pdf_files", files[i]);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
    {
      method: "POST",
      body: formData,
    }
  );
  if (response.ok) {
    // Handle file download
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    showToast("success", "Successfully merged, Press download button");
    setLoading(false);
  } else {
    setLoading(false);
    // const errorData = await response.json();
    showToast("error", "Something went wrong, try again later");
  }
}

export async function handlePdfToJpegConverter(
  file: any,
  currentTool: any,
  setImages: any,
  setLoading: any
) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
    let base64FileData = "";
    if (typeof reader?.result === "string") {
      base64FileData = reader.result.split(",")[1];
    }
    const fileName = file.name;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${currentTool?.backendPath}`,
      {
        method: "POST",
        body: JSON.stringify({
          file_name: fileName,
          file_data: base64FileData,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setImages(data.images);
      showToast("success", "Successfully converted, Press download button");
      setLoading(false);
    } else {
      const errorText = await response.text();
      console.error("Error transcribing video:", errorText);
      showToast("error", "Something went wrong, try again later");
      setLoading(false);
    }
  };
}

export async function handleHtmlToPdfConverter(
  url: any,
  currentTool: any,
  setDownloadLink: any,
  setLoading: any
) {
  const response = await fetch("http://127.0.0.1:8000/html-to-pdf/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (response.ok) {
    const blob = await response.blob();
    const pdfUrl = window.URL.createObjectURL(blob);
    setDownloadLink(pdfUrl);
    setLoading(false);
  } else {
    // const errorData = await response.json();
    showToast("error", "Something went wrong, try again later");
    setLoading(false);
  }
}
