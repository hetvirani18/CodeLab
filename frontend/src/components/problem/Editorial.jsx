import { useSelector } from "react-redux";
import Player from "../player";

const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  };

const Editorial = () => {
  const problem = useSelector(
    (state) => state.problemDetail.problem
  );

  const secureUrl = problem?.secureUrl;
  const thumbnailUrl = problem?.thumbnailUrl;
  const duration = problem?.duration;

  if (!secureUrl) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-base-content/8 bg-base-200 py-16 px-6 text-center">
        <div className="text-4xl mb-3">🎬</div>

        <p className="font-semibold text-base-content/60 mb-1">
          No editorial yet
        </p>

        <p className="text-sm text-base-content/30">
          The editorial video for this problem hasn't been uploaded yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
    <Player
      secureUrl={secureUrl}
      thumbnailUrl={thumbnailUrl}
      duration={duration}
    />

    <div className="flex items-center justify-between px-1">
      <p className="font-mono text-xs text-base-content/30">
        Duration:{" "}
        <span className="text-base-content/50">
          {fmt(duration)}
        </span>
      </p>

      <p className="font-mono text-xs text-base-content/25">
        Editorial · Video
      </p>
    </div>
  </div>
  );
};

export default Editorial;