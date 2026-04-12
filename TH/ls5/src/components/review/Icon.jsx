export default function Icon({ name, filled = false, className = '' }) {
  return (
    <span
      className={`material-symbols-outlined align-middle ${className}`}
      style={
        filled
          ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
          : { fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
      }
    >
      {name}
    </span>
  )
}
