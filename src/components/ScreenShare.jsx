import React, { useState, useRef } from "react";

function ScreenShareComponent() {
  const [isSharing, setIsSharing] = useState(false);
  const videoRef = useRef();

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setIsSharing(true);
    } catch (error) {
      console.error("Error accessing screen:", error);
    }
  };

  const stopScreenShare = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream?.getTracks();

    tracks.forEach((track) => track.stop());

    videoRef.current.srcObject = null;
    setIsSharing(false);
  };

  return (
    <div className="p-10 flex gap-2 flex-col items-center">
      <video
        className="w-full h-96 rounded-md border bg-black border-slate-400"
        ref={videoRef}
        autoPlay
      />

      <button
        className={`${
          isSharing ? "bg-orange-600" : "bg-green-600"
        } p-2 text-white`}
        onClick={isSharing ? stopScreenShare : startScreenShare}
      >
        {isSharing ? "Stop Sharing" : "Start Sharing"}
      </button>
    </div>
  );
}

export default ScreenShareComponent;
