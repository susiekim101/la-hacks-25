import classNames from 'classnames';
const cn = classNames;

function Opening() {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col items-center justify-center',
        'p-4 sm:p-8'
      )}
    >
      <div
        className={cn(
          'w-full max-w-2xl text-center space-y-6',
          'bg-transparent',
          'backdrop-blur-md',
          'py-8 px-4 sm:px-8 rounded-xl',
          'border border-white/10',
          'box-shadow-lg'
        )}
      >
        <h1
          className={cn(
            'text-4xl sm:text-6xl font-bold',
            'text-white',
            'drop-shadow-lg',
            'bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text', // Added gradient
          )}
        >
          Cloud2School
        </h1>
        <p
          className={cn(
            'text-sm sm:text-base',
            'text-white',
            'opacity-80',
            'text-gray-200'
          )}
        >
          From flight to rides - cutting carbon, one trip at a time.
        </p>
        <div
          className={cn(
            'text-6xl sm:text-8xl font-semibold',
            'text-white',
            'tracking-tighter',
            'drop-shadow-lg',
             'bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text', // Added gradient
          )}
        >
          467
        </div>
        <p className="text-white text-sm sm:text-base opacity-70">
          Million tons of carbon saved
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className={cn(
              'bg-white text-blue-500',
              'hover:bg-gray-100 hover:scale-105',
              'px-6 py-3 rounded-full',
              'font-semibold shadow-md',
              'transition-colors duration-300',
              'border border-blue-500/30'
            )}
          >
            Login
          </button>
          <button
            className={cn(
              'bg-yellow-500 text-white',
              'hover:bg-yellow-600 hover:scale-105',
              'px-6 py-3 rounded-full',
              'font-semibold shadow-md',
              'transition-colors duration-300',
              'border border-yellow-500/30'
            )}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Opening;
