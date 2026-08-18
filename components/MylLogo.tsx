interface MylLogoProps {
  className?: string
  width?: number
  color?: string
}

export default function MylLogo({ className = "", width = 100, color = "white" }: MylLogoProps) {
  const height = Math.round(width * 0.32)

  return (
    <svg
      viewBox="0 0 520 168"
      width={width}
      height={height}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="MYL"
    >
      <defs>
        <mask id="y-mask">
          <rect x="175" y="0" width="185" height="168" fill="white" />
          {/* diagonal slash cut through Y */}
          <polygon points="306,0 342,0 276,84 240,84" fill="black" />
        </mask>
      </defs>

      {/* M — two П arches side by side */}
      <rect x="0" y="0" width="30" height="148" />
      <rect x="0" y="0" width="100" height="28" />
      <rect x="70" y="0" width="30" height="90" />
      <rect x="70" y="0" width="100" height="28" />
      <rect x="140" y="0" width="30" height="148" />

      {/* Y — with diagonal slash mask */}
      <g mask="url(#y-mask)">
        {/* left arm */}
        <polygon points="178,0 234,0 268,84 212,84" />
        {/* right arm */}
        <polygon points="292,0 344,0 316,84 260,84" />
        {/* stem */}
        <rect x="212" y="84" width="30" height="64" />
      </g>

      {/* L */}
      <rect x="370" y="0" width="30" height="148" />
      <rect x="370" y="120" width="96" height="28" />
    </svg>
  )
}
