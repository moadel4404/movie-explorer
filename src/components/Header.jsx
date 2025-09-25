function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 w-full border-b border-gray-200/10 dark:border-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                CineMatch
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a href="#" className="text-blue-600 font-semibold">
                Movies
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600 transition-colors"
              >
                TV Shows
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600 transition-colors"
              >
                People
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                search
              </span>
              <input
                type="search"
                placeholder="Search..."
                className="w-full rounded-full border-0 bg-gray-200/50 dark:bg-gray-800/50 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              />
            </div>
            <button className="hidden sm:flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-blue-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-blue-200 transition-colors">
              <span className="material-symbols-outlined">bookmark</span>
            </button>
            <button>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP4l0JKL3Y1f2J4QC1i5044423tDWhLYpuIMcGk2HCuT7y-E2vkhdKuu9grv5xH80PYuljV-BphJZ4Lfv45QNM6LHQufTyzCv9PZ_JUIiYJiXW4WFLXY7Pi9f3y1Onkky3LWiFhLZ0PzwqoNqvNEdZVZ7F4sjunoEJqM-d3CCb31nSx3l_RlkGOfwSRRTXzxGpvtwpsA5bLVdSkgzk81fUbrHXuR2xS83gH8TmLy3owdmemO2pKpddHSsqsrwAZ3j5eIFQAM-5Hg"
                alt="User avatar"
                className="h-9 w-9 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
