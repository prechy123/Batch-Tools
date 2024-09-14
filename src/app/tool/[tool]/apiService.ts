/* eslint-disable @typescript-eslint/no-explicit-any */
import { showToast } from "@/utils/ShowToast";
import BASE_URL from "@/utils/util";
import internal from "stream";

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

    const response = await fetch(`${BASE_URL}${currentTool?.backendPath}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_name: fileName,
        file_data: base64FileData, // the base64-encoded file content
      }),
    });
    if (response.ok) {
      // Handle file download
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadLink(url);
      showToast("success", "Successfully converted to word");
      // const url = window.URL.createObjectURL(blob);
      // const link = document.createElement("a");
      // link.href = url;
      // link.setAttribute(
      //   "download",
      //   `converted_${fileName.replace(".pdf", ".docx")}`
      // );
      // document.body.appendChild(link);
      // link.click();
      // link?.parentNode?.removeChild(link);
      setLoading(false);
      // setFile(null);
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

  const response = await fetch(`${BASE_URL}${currentTool?.backendPath}/`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    // Handle success, set the download link for the audio file
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    setLoading(false)
  } else {
    const errorText = await response.text();
    console.error("Error converting video to audio:", errorText);
    setLoading(false)
  }
}

export async function handleImageResizer(
  file: any,
  width: float | internal,
  height: float | internal,
  currentTool: any,
  setDownloadLink: any,
  setResizedImageLink: any,
  setLoading: any
) {
  const formData = new FormData();
    formData.append('image_file', file);
    formData.append('width', width);
    formData.append('height', height);
    const response = await fetch(`${BASE_URL}${currentTool?.backendPath}/`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadLink(url);
      setResizedImageLink(url)
      setLoading(false)
    } else {
      console.error('Error resizing image.');
      setLoading(false)
    }
}