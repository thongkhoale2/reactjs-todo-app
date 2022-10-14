import video from "./videos/girl-in-mirror.mp4";
import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  useEffect(() => {
    console.log(props);
    console.log(ref);
  });
  return <video ref={videoRef} src={video} width={280}></video>;
}

export default forwardRef(Video);
