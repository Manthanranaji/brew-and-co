
export default function Coffee({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Glass gradient */}
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>

        {/* Coffee gradient */}
        <linearGradient id="coffee" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4b2e1f" />
          <stop offset="100%" stopColor="#1f120b" />
        </linearGradient>

        {/* Crema */}
        <linearGradient id="crema" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0a85a" />
          <stop offset="100%" stopColor="#b87422" />
        </linearGradient>

        {/* Inner glass clip (THIS makes liquid follow curve) */}
        <clipPath id="glassClip">
          <rect x="55" y="35" width="90" height="150" rx="22" />
        </clipPath>
      </defs>

      {/* Shadow */}
      <ellipse cx="100" cy="215" rx="55" ry="12" fill="#000" opacity="0.1" />

      {/* Outer Glass (OPEN TOP visually) */}
      <rect
        x="40"
        y="20"
        width="120"
        height="180"
        rx="30"
        stroke="#3B1F0E"
        strokeWidth="3"
        fill="url(#glass)"
      />

      {/* Inner rim highlight (shows it's open) */}
      <ellipse
        cx="100"
        cy="35"
        rx="45"
        ry="10"
        fill="white"
        opacity="0.12"
      />

      {/* COFFEE INSIDE (clipped to curved glass) */}
      <g clipPath="url(#glassClip)">
        
        {/* Coffee body following curve */}
        <path
          d="
            M55 185
            L55 115
            Q100 105 145 115
            L145 185
            Z
          "
          fill="url(#coffee)"
        />

        {/* Crema (curved surface) */}
        <path
          d="
            M55 115
            Q100 100 145 115
            Q100 125 55 115
          "
          fill="url(#crema)"
        />

      </g>

      {/* Glass highlight */}
      <rect
        x="65"
        y="40"
        width="10"
        height="140"
        rx="5"
        fill="white"
        opacity="0.15"
      />

      {/* Side reflection */}
      <rect
        x="120"
        y="55"
        width="6"
        height="120"
        rx="3"
        fill="white"
        opacity="0.07"
      />
    </svg>
  );
}
