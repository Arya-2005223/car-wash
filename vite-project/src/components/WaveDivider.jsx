function WaveDivider({ fromColor = '#0b3142', toColor = '#f6faf9', flip = false }) {
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      style={{ transform: flip ? 'scaleY(-1)' : 'none', background: fromColor }}
      aria-hidden="true"
    >
      <path
        d="M0 40 C 150 80, 300 0, 450 32 C 600 64, 750 8, 900 32 C 1050 56, 1150 24, 1200 40 L1200 80 L0 80 Z"
        fill={toColor}
      />
    </svg>
  )
}

export default WaveDivider
