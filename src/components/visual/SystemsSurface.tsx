export default function SystemsSurface() {
  return (
    <div className="systems-surface" aria-hidden="true">
      <div className="systems-surface__topline">
        <span>trust</span>
        <span>speech</span>
        <span>security</span>
      </div>

      <div className="systems-surface__panel">
        <div className="systems-surface__grid" />
        <svg viewBox="0 0 520 420" className="systems-surface__svg" role="presentation">
          <defs>
            <linearGradient id="signalStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f4a9b" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#7e93bb" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          <path
            d="M54 288C108 252 138 166 194 154C254 140 276 246 344 242C404 238 424 156 474 124"
            fill="none"
            stroke="url(#signalStroke)"
            strokeWidth="3"
          />
          <path
            d="M60 320C136 296 174 250 238 252C284 254 306 292 352 288C398 284 438 252 474 218"
            fill="none"
            stroke="#95a5c4"
            strokeWidth="1.5"
            strokeDasharray="5 8"
            opacity="0.8"
          />

          {[
            [74, 284],
            [194, 154],
            [344, 242],
            [474, 124],
            [238, 252],
            [474, 218]
          ].map(([cx, cy], index) => (
            <g key={index}>
              <circle cx={cx} cy={cy} r="7" fill="#17336d" />
              <circle cx={cx} cy={cy} r="18" fill="none" stroke="#7c8fb6" strokeOpacity="0.35" />
            </g>
          ))}
        </svg>

        <div className="systems-surface__metrics">
          <div>
            <p>operational fit</p>
            <strong>system capability</strong>
          </div>
          <div>
            <p>evidence traceability</p>
            <strong>trust under deployment</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
