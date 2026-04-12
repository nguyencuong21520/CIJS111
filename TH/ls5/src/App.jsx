import { useState } from 'react'
import { useReviews } from './hooks/useReviews'
import { Sidebar, Header, AdminDashboard, SubmitReviewForm } from './components/review'
import './App.css'

export default function App() {
  const { reviews, addReview, approveReview, deleteReview, stats } = useReviews()
  const [page, setPage] = useState('dashboard')

  const handleSubmitReview = (review) => {
    addReview(review)
    setPage('dashboard')
  }

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface">
      {/* Sidebar (fixed on desktop) */}
      <Sidebar currentPage={page} onNavigate={setPage} />

      {/* Main content area */}
      <main className="md:ml-64 min-h-screen pb-24 md:pb-12">
        <Header currentPage={page} onNavigate={setPage} />

        {page === 'dashboard' && (
          <AdminDashboard
            reviews={reviews}
            stats={stats}
            onApprove={approveReview}
            onDelete={deleteReview}
            onNavigate={setPage}
          />
        )}

        {page === 'submit' && (
          <SubmitReviewForm
            onSubmit={handleSubmitReview}
            onBack={() => setPage('dashboard')}
          />
        )}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-[32px] bg-white/70 backdrop-blur-xl shadow-[0_-8px_32px_rgba(0,0,0,0.06)] flex justify-around items-center px-4 pt-3 pb-8">
        <button
          onClick={() => setPage('dashboard')}
          className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform ${
            page === 'dashboard'
              ? 'bg-primary/10 text-primary rounded-2xl'
              : 'text-outline'
          }`}
        >
          <span className="material-symbols-outlined text-xl mb-1">grid_view</span>
          <span className="text-[10px] font-medium">Feed</span>
        </button>
        <button
          onClick={() => setPage('submit')}
          className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 transition-transform ${
            page === 'submit'
              ? 'bg-primary/10 text-primary rounded-2xl'
              : 'text-outline'
          }`}
        >
          <span className="material-symbols-outlined text-xl mb-1">rate_review</span>
          <span className="text-[10px] font-medium">Reviews</span>
        </button>
        <button className="flex flex-col items-center justify-center text-outline px-5 py-2 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-xl mb-1">bookmark</span>
          <span className="text-[10px] font-medium">Saved</span>
        </button>
        <button className="flex flex-col items-center justify-center text-outline px-5 py-2 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-xl mb-1">person</span>
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  )
}
