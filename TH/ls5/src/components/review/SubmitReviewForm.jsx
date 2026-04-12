import { useState } from 'react'
import Icon from './Icon'
import StarRating from './StarRating'
import VibeMeter from './VibeMeter'

const PRODUCT = {
  name: 'Sony WH-1000XM5',
  description: 'Wireless Noise Cancelling Headphones. Silver/Black Edition. Purchased on Oct 12, 2023.',
  category: 'Electronics',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-x4_a88MrpUKubqsRxbN1DC3tifkVDhC9zM_l1E7jSyOQGt7fLg-JhxRth4zvgDB5lRanBFEFoX_pYJhgRjjP7ZJuNJ4FLJM3SeQ9LvYv2ZgBT0HKjjQzRd2havgNXKM_ByCpwM5HKL5TR4ezbQKpwNS2AEoNRYmIloP-2HzymzmAqlazDntFRYYClkDb7_8uXuHB0jGq6Ooq5pvU2dslqlbPIasblYJjIuqHuZ9RlA4oEzQfk1PuU7kL6LLVA48GUhw0ELQ0FGY',
}

export default function SubmitReviewForm({ onSubmit, onBack }) {
  const [overall, setOverall] = useState(4)
  const [soundQuality, setSoundQuality] = useState(5)
  const [batteryLife, setBatteryLife] = useState(4)
  const [comfort, setComfort] = useState(3)
  const [reviewText, setReviewText] = useState('')
  const [dragActive, setDragActive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!reviewText.trim()) return

    onSubmit({
      product: PRODUCT.name,
      category: PRODUCT.category,
      productImage: PRODUCT.image,
      customer: 'Current User',
      email: 'user@example.com',
      rating: overall,
      review: reviewText,
      soundQuality,
      batteryLife,
      comfort,
    })
    setReviewText('')
    setOverall(4)
    setSoundQuality(5)
    setBatteryLife(4)
    setComfort(3)
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:flex md:gap-12">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:flex h-fit w-64 flex-col p-6 gap-2 bg-white rounded-3xl shadow-xl sticky top-24 shrink-0">
        <div className="mb-6 px-4">
          <h2 className="font-headline font-bold text-xl text-on-surface">Curator Admin</h2>
          <p className="text-xs text-outline">Electronics Portal</p>
        </div>
        <nav className="flex flex-col gap-1">
          <button
            onClick={onBack}
            className="flex items-center gap-3 text-outline px-4 py-3 hover:bg-surface-container-high transition-colors rounded-xl text-left"
          >
            <Icon name="dashboard" />
            <span className="font-body text-sm font-medium">Dashboard</span>
          </button>
          <div className="flex items-center gap-3 bg-primary/10 text-primary rounded-xl px-4 py-3">
            <Icon name="pending_actions" />
            <span className="font-body text-sm font-medium">Pending Reviews</span>
          </div>
          <button className="flex items-center gap-3 text-outline px-4 py-3 hover:bg-surface-container-high transition-colors rounded-xl text-left">
            <Icon name="verified" />
            <span className="font-body text-sm font-medium">Published</span>
          </button>
        </nav>
        <div className="mt-8">
          <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 px-4 rounded-full font-semibold text-sm shadow-lg active:scale-95 transition-transform">
            Export Report
          </button>
        </div>
      </aside>

      {/* Form Content */}
      <div className="flex-1 space-y-12">
        {/* Product Summary */}
        <section className="bg-surface-container-lowest p-8 rounded-[32px] flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-40 h-40 rounded-2xl overflow-hidden bg-surface-container-low shrink-0">
            <img
              alt={PRODUCT.name}
              className="w-full h-full object-cover"
              src={PRODUCT.image}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase">
                {PRODUCT.category}
              </span>
              <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full">
                <Icon name="verified" filled className="text-[14px] text-primary" />
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                  Verified Purchase
                </span>
              </div>
            </div>
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-2 tracking-tight">
              {PRODUCT.name}
            </h2>
            <p className="text-on-surface-variant font-body leading-relaxed max-w-md">
              {PRODUCT.description}
            </p>
          </div>
        </section>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Ratings Section */}
          <div className="bg-surface-container-low p-10 rounded-[32px] space-y-8">
            <div className="flex flex-col items-center gap-6">
              <h3 className="font-headline text-xl font-semibold">Overall Satisfaction</h3>
              <VibeMeter rating={overall} />
              <StarRating value={overall} onChange={setOverall} size="text-4xl" />
            </div>

            {/* Granular Ratings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-outline-variant/20">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Sound Quality
                </label>
                <StarRating value={soundQuality} onChange={setSoundQuality} />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Battery Life
                </label>
                <StarRating value={batteryLife} onChange={setBatteryLife} />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Comfort
                </label>
                <StarRating value={comfort} onChange={setComfort} />
              </div>
            </div>
          </div>

          {/* Review Text */}
          <div className="space-y-4">
            <label className="font-headline text-lg font-semibold block px-2">
              Write your review
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full h-48 bg-surface-container-low border-none rounded-3xl p-6 font-body text-on-surface placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all resize-y outline-none"
              placeholder="What was your experience like with these headphones?"
            />
          </div>

          {/* File Upload */}
          <div className="space-y-4">
            <label className="font-headline text-lg font-semibold block px-2">
              Share your setup
            </label>
            <div
              className={`relative group w-full h-40 border-2 border-dashed rounded-[32px] flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer ${
                dragActive
                  ? 'border-primary bg-primary/5'
                  : 'border-outline-variant/30 bg-surface-container-low hover:bg-surface-container-high'
              }`}
              onDragEnter={() => setDragActive(true)}
              onDragLeave={() => setDragActive(false)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => setDragActive(false)}
            >
              <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                <Icon name="upload_file" className="text-3xl" />
              </div>
              <p className="text-sm font-medium text-on-surface-variant">
                Drag and drop photos or{' '}
                <span className="text-primary underline">browse</span>
              </p>
              <p className="text-[10px] text-outline uppercase tracking-wider">
                Supports JPG, PNG up to 10MB
              </p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={onBack}
              className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-semibold text-sm hover:opacity-80 transition-opacity"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-transform"
            >
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
