import Icon from './Icon'

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Dashboard', page: 'dashboard' },
  { icon: 'rate_review', label: 'Write Review', page: 'submit' },
  { icon: 'pending_actions', label: 'Pending Reviews', page: 'dashboard' },
  { icon: 'verified', label: 'Published', page: 'dashboard' },
  { icon: 'bar_chart', label: 'Analytics', page: 'dashboard' },
  { icon: 'settings', label: 'Settings', page: 'dashboard' },
]

export default function Sidebar({ currentPage, onNavigate }) {
  const isActive = (item) => item.page === currentPage

  return (
    <aside className="hidden md:flex flex-col p-6 gap-2 h-screen w-64 fixed left-0 top-0 z-40 bg-white shadow-xl font-body text-sm font-medium">
      <div className="mb-10 px-4">
        <h1 className="font-headline font-bold text-xl text-on-surface">Curator Admin</h1>
        <p className="text-[10px] text-outline uppercase tracking-widest mt-1">
          Electronics Portal
        </p>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.page)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all active:scale-95 text-left ${
              isActive(item)
                ? 'bg-primary/10 text-primary'
                : 'text-outline hover:bg-surface-container-high'
            }`}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-surface-variant/30">
        <div className="flex items-center gap-3 px-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary">
            AD
          </div>
          <div>
            <p className="font-semibold text-on-surface">Admin</p>
            <p className="text-xs text-outline">Curator Lead</p>
          </div>
        </div>
        <button className="w-full bg-primary-container text-on-primary py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity active:scale-95">
          Export Report
        </button>
      </div>
    </aside>
  )
}
