import Icon from './Icon'

export default function StarRating({ value = 0, onChange, size = 'text-xl', readonly = false }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          className={`${
            star <= value ? 'text-primary' : 'text-outline-variant'
          } ${size} active:scale-90 transition-transform disabled:cursor-default`}
        >
          <Icon name="star" filled={star <= value} className={size} />
        </button>
      ))}
    </div>
  )
}
