navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => console.log("Success:", stream))
  .catch((error) => console.error("Error:", error));
