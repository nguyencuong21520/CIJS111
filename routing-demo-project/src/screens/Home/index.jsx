import { Link } from 'react-router';
function HomePage() {
  return (
    <section className='flex min-h-screen items-center justify-center bg-slate-100 px-4'>
      <div className='w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg md:p-10'>
        <p className='mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-600'>
          Routing Demo
        </p>
        <h1 className='mb-3 text-3xl font-bold text-slate-900 md:text-4xl'>
          Home Page
        </h1>
        <p className='mb-8 text-sm text-slate-600 md:text-base'>
          This is a simple home screen. Choose where you want to go next.
        </p>

        <div className='flex flex-col gap-3 sm:flex-row'>
          <button
            type='button'
            className='rounded-xl bg-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-cyan-600'
          >
            <Link to='/login'>Go to Login</Link>
          </button>
          <button
            type='button'
            className='rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100'
          >
            <Link to='/profile'>Go to Profile</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
