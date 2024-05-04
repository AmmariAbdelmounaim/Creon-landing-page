export default function VideoComponent() {
  return (
    <video className="w-full h-screen" controls preload="none">
      <source src="/video/" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your birowser does not support the video tag.
    </video>
  )
}
