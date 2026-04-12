const BAR_HEIGHTS = [12, 20, 28, 20, 12]

export default function VibeMeter({ rating = 0, maxRating = 5, small = false }) {
  const activeCount = Math.round((rating / maxRating) * BAR_HEIGHTS.length)
  const barWidth = small ? 'w-1' : 'w-3'

  return (
    <div className={`flex items-end gap-${small ? '0.5' : '2'} ${small ? 'h-6' : 'h-8'}`}>
      {BAR_HEIGHTS.map((h, i) => {
        const scale = small ? 0.5 : 1
        return (
          <div
            key={i}
            className={`${barWidth} rounded-full transition-colors ${
              i < activeCount
                ? 'bg-primary'
                : 'bg-primary/15'
            }`}
            style={{ height: `${h * scale}px` }}
          />
        )
      })}
    </div>
  )
}
