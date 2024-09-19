import { useState } from "react";

function useTextInput() {
  const [textInput, setTextInput] = useState(false);
  const [url, setUrl] = useState<string>("");

  return {textInput, setTextInput, url, setUrl}
}

export default useTextInput;
