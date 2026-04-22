import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 text-white'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='blob-one absolute -left-16 top-16 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl' />
        <div className='blob-two absolute right-0 top-1/4 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl' />
        <div className='blob-three absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl' />
        <div className='stars-grid absolute inset-0 opacity-40' />
      </div>

      <article className='glass-card relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-xl md:p-12'>
        <p className='mb-2 inline-block rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200'>
          Lost in space
        </p>

        <h1 className='glow-text mb-4 text-7xl font-black leading-none tracking-tight md:text-9xl'>
          404
        </h1>

        <h2 className='mb-3 text-2xl font-bold text-slate-100 md:text-3xl'>
          Page Not Found
        </h2>
        <p className='mx-auto mb-8 max-w-xl text-sm text-slate-300 md:text-base'>
          The page you are looking for does not exist or has moved to another galaxy.
        </p>

        <div className='mb-8 flex justify-center gap-3'>
          <span className='dot h-3 w-3 rounded-full bg-cyan-300' />
          <span className='dot h-3 w-3 rounded-full bg-fuchsia-300 [animation-delay:220ms]' />
          <span className='dot h-3 w-3 rounded-full bg-indigo-300 [animation-delay:440ms]' />
        </div>

        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Link
            to='/'
            className='w-full rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] sm:w-auto'
          >
            Go Home
          </Link>
          <Link
            to='/profile'
            className='w-full rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200 sm:w-auto'
          >
            Visit Profile
          </Link>
        </div>
      </article>

      <style>{`
        .glass-card {
          animation: cardFloat 4.8s ease-in-out infinite;
        }

        .glow-text {
          text-shadow: 0 0 18px rgba(103, 232, 249, 0.55), 0 0 40px rgba(59, 130, 246, 0.35);
        }

        .dot {
          animation: dotBlink 1.4s ease-in-out infinite;
        }

        .blob-one {
          animation: driftY 9s ease-in-out infinite;
        }

        .blob-two {
          animation: driftX 11s ease-in-out infinite;
        }

        .blob-three {
          animation: spinSlow 16s linear infinite;
        }

        .stars-grid {
          background-image:
            radial-gradient(circle at center, rgba(255, 255, 255, 0.75) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
          background-size: 28px 28px, 64px 64px;
          background-position: 0 0, 16px 16px;
          animation: twinkle 6s linear infinite;
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes dotBlink {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes driftY {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(35px);
          }
        }

        @keyframes driftX {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-45px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.28;
          }
          50% {
            opacity: 0.55;
          }
        }
      `}</style>
    </section>
  );
}

export default NotFoundPage;
