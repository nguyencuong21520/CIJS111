import { useState, useMemo } from 'react'
import Icon from './Icon'
import VibeMeter from './VibeMeter'

export default function AdminDashboard({ reviews, stats, onApprove, onDelete, onNavigate }) {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 5

  const filtered = useMemo(() => {
    if (!search.trim()) return reviews
    const q = search.toLowerCase()
    return reviews.filter(
      (r) =>
        r.product.toLowerCase().includes(q) ||
        r.customer.toLowerCase().includes(q)
    )
  }, [reviews, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage)

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <div className="px-6 md:px-10 py-8 max-w-7xl mx-auto space-y-10">
      {/* Stats Cards */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Total Reviews */}
        <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-[32px] flex flex-col justify-between h-48 relative overflow-hidden group">
          <div className="z-10">
            <p className="text-on-surface-variant font-medium text-sm">Total Reviews</p>
            <h3 className="font-headline font-bold text-4xl mt-2">{stats.total}</h3>
          </div>
          <div className="z-10 flex items-center gap-2 text-primary font-semibold text-sm">
            <Icon name="trending_up" />
            <span>+12% from last month</span>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
            <Icon name="rate_review" className="text-[120px]" />
          </div>
        </div>

        {/* Average Rating */}
        <div className="md:col-span-5 bg-primary-container p-8 rounded-[32px] text-on-primary flex flex-col justify-between h-48 relative shadow-2xl shadow-primary/30">
          <div className="flex justify-between items-start">
            <div>
              <p className="opacity-80 font-medium text-sm">Average Rating</p>
              <h3 className="font-headline font-bold text-5xl mt-2">{stats.avgRating}</h3>
            </div>
            <div className="flex items-end gap-1 h-12">
              <div className="w-1 rounded-sm bg-white/30" style={{ height: 24 }} />
              <div className="w-1 rounded-sm bg-white/30" style={{ height: 40 }} />
              <div className="w-1 rounded-sm bg-white" style={{ height: 48 }} />
              <div className="w-1 rounded-sm bg-white" style={{ height: 36 }} />
              <div className="w-1 rounded-sm bg-white" style={{ height: 28 }} />
            </div>
          </div>
          <p className="text-sm font-medium opacity-90">
            Based on {stats.total}+ verified purchases
          </p>
        </div>

        {/* Pending Approval */}
        <div className="md:col-span-3 bg-surface-container-low p-8 rounded-[32px] flex flex-col justify-center items-center h-48 text-center">
          <p className="text-on-surface-variant font-medium text-sm mb-2">Pending Approval</p>
          <h3 className="font-headline font-bold text-5xl text-error">{stats.pending}</h3>
          <button
            onClick={() => onNavigate?.('submit')}
            className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            Review Now <Icon name="chevron_right" className="text-sm" />
          </button>
        </div>
      </section>

      {/* Data Table */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="font-headline font-semibold text-2xl text-on-surface">
            Recent Submissions
          </h2>
          <div className="flex items-center gap-3">
            <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <Icon name="search" className="text-on-surface-variant text-xl" />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setCurrentPage(1)
                }}
                className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-48 md:w-64 font-body placeholder:text-on-surface-variant/50"
                placeholder="Search product or customer..."
              />
            </div>
            <button className="bg-surface-container-high p-2 rounded-full hover:bg-surface-variant transition-colors">
              <Icon name="filter_list" className="text-on-surface" />
            </button>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-[32px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 text-on-surface-variant text-xs font-semibold uppercase tracking-wider">
                  <th className="px-8 py-5">Product</th>
                  <th className="px-6 py-5">Customer</th>
                  <th className="px-6 py-5">Rating</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Date</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {paginated.map((review) => (
                  <tr key={review.id} className="group hover:bg-surface-bright transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            className="object-cover w-full h-full"
                            src={review.productImage}
                            alt={review.product}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-on-surface">{review.product}</p>
                          <p className="text-xs text-on-surface-variant">{review.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col">
                        <span className="font-medium text-on-surface">{review.customer}</span>
                        <span className="text-xs text-on-surface-variant">{review.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <VibeMeter rating={review.rating} small />
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className={`px-3 py-1 text-[10px] font-bold rounded-md uppercase ${
                          review.status === 'pending'
                            ? 'bg-secondary-container text-on-secondary-container'
                            : 'bg-surface-container-high text-on-surface-variant'
                        }`}
                      >
                        {review.status}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className="text-sm text-on-surface-variant">
                        {formatDate(review.date)}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {review.status === 'pending' && (
                          <button
                            onClick={() => onApprove(review.id)}
                            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors active:scale-90"
                            title="Approve"
                          >
                            <Icon name="check_circle" filled />
                          </button>
                        )}
                        <button
                          className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-90"
                          title="Reply"
                        >
                          <Icon name="reply" />
                        </button>
                        <button
                          onClick={() => onDelete(review.id)}
                          className="p-2 text-error hover:bg-error/10 rounded-full transition-colors active:scale-90"
                          title="Delete"
                        >
                          <Icon name="delete" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {paginated.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-8 py-12 text-center text-on-surface-variant">
                      No reviews found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-5 flex items-center justify-between bg-surface-container-low/30 border-t border-surface-container-low">
            <span className="text-sm text-on-surface-variant">
              Showing {Math.min((currentPage - 1) * perPage + 1, filtered.length)}-
              {Math.min(currentPage * perPage, filtered.length)} of {filtered.length} reviews
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant disabled:opacity-30"
              >
                <Icon name="chevron_left" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg font-bold text-xs ${
                    page === currentPage
                      ? 'bg-primary text-on-primary'
                      : 'hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant disabled:opacity-30"
              >
                <Icon name="chevron_right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
