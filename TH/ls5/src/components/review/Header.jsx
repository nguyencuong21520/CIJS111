import Icon from './Icon'

const TABS = [
  { key: 'dashboard', icon: 'dashboard', label: 'Admin Dashboard' },
  { key: 'submit', icon: 'rate_review', label: 'Write Review' },
]

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 bg-surface">
      <div className="flex items-center justify-between px-6 h-16 w-full font-headline font-semibold text-lg">
        <div className="flex items-center gap-4">
          <Icon name="arrow_back" className="text-primary" />
          <h2 className="text-on-surface">Reviews</h2>
        </div>
        <div className="flex items-center gap-4">
          <Icon
            name="search"
            className="text-primary hover:opacity-80 transition-opacity cursor-pointer"
          />
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-[10px] text-on-secondary-container font-bold">
            JD
          </div>
        </div>
      </div>

      {/* Page Tabs */}
      <div className="flex gap-1 px-6 pb-3">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onNavigate(tab.key)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 ${
              currentPage === tab.key
                ? 'bg-primary text-on-primary shadow-lg shadow-primary/25'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <Icon name={tab.icon} className="text-lg" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </header>
  )
}
