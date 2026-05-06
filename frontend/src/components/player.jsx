import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

export default function Player({secureUrl,
  thumbnailUrl,
  duration,}) {
  return (
    <div className="w-full">
      <MediaController
        style={{
          width: "100%",
          aspectRatio: "16/8.7",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#000",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45)",

          // media chrome theme vars
          "--media-primary-color": "#fff",
          "--media-secondary-color": "#00e676",
          "--media-control-background": "transparent",
          "--media-control-hover-background": "rgba(255,255,255,0.1)",
          "--media-range-thumb-background": "#00e676",
          "--media-range-bar-color": "#00e676",
          "--media-range-track-background": "rgba(255,255,255,0.15)",
          "--media-font-family": "Inter, sans-serif",
          "--media-icon-size": "22px",
          position: "relative",
        }}
      >
        {/* Video */}
        <ReactPlayer
          slot="media"
          src={secureUrl}
          controls={false}
          playing={false}
          muted={false}
          playsInline
          width="100%"
          height="100%"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          config={{
            file: {
              attributes: {
                poster: thumbnailUrl || "",
                preload: "metadata",
              },
            },
          }}
        />

        {/* Gradient Overlay */}
        <div
          slot="overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 35%)",
            pointerEvents: "none",
          }}
        />

        {/* Controls */}
        <MediaControlBar
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "10px 14px",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
            backdropFilter: "blur(10px)",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <MediaPlayButton />

          <MediaSeekBackwardButton seekOffset={10} />
          <MediaSeekForwardButton seekOffset={10} />

          <MediaTimeRange
            style={{
              flexGrow: 1,
              marginInline: "10px",
            }}
          />

          <MediaTimeDisplay
            showDuration
            style={{
              fontSize: "12px",
              opacity: 0.7,
              fontFamily: "monospace",
            }}
          />

          <MediaMuteButton />

          <MediaVolumeRange
            style={{
              width: "70px",
            }}
          />

          <MediaPlaybackRateButton />

          <MediaFullscreenButton />
        </MediaControlBar>
      </MediaController>
    </div>
  );
}