import "./style.css";

function RoundProgressBar({ percentage, skill }) {
  const radius = 80;
  const margin = 4;
  const strokeDasharray = radius * 2 * Math.PI;
  const strokeDashoffset =
    strokeDasharray - (percentage / 100) * strokeDasharray + margin;
  const gradientId = `grad-${skill.replace(/\s+/g, "")}`;
  return (
    <div className="d-flex flex-column align-items-center">
      <svg width="200" height="200" viewBox="0 0 200 200 " className="skill">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#020a13" />
            <stop offset="40%" stopColor="#0a4d8c" />
            <stop offset="100%" stopColor="#2d94d4" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={radius} className="circle-bg" />
        <circle
          cx="100"
          cy="100"
          r={radius}
          className="circle-progress"
          stroke={`url(#${gradientId})`}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="aliceblue"
          fontSize="30px"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>

      <svg width="200" height="50" className="skill">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="aliceblue"
          fontSize="22px"
        >
          {skill}
        </text>
      </svg>
    </div>
  );
}

export default RoundProgressBar;
