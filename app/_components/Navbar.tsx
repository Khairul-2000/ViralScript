'use client';

import { useTheme } from './ThemeProvider';

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Scripts', href: '#scripts' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Templates', href: '#templates' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'AI Generator', href: '#ai-generator' }
    ];

    return (
        <nav className="sticky top-0 z-50 navbar-backdrop bg-[var(--navbar-bg)]/95 border-b border-[var(--navbar-border)]">
            <div className="mx-[120px] py-4">
                <div className="flex justify-between items-center">
                    {/* Fancy Logo */}
                    <div className="flex items-center space-x-3 logo-container cursor-pointer">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--firstColor)] to-[var(--secondColor)] flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <svg 
                                    className="w-7 h-7 text-white transform -rotate-3" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                </svg>
                            </div>
                            <div 
                                className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--secondColor)] rounded-full animate-pulse"
                                style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                            ></div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold logo-gradient leading-tight">
                                Viral<span className="text-[var(--firstColor)]">Script</span>
                            </h2>
                            <p className="text-xs text-[var(--secondColor)] font-medium -mt-1">
                                Content Library
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.href}
                                    className="nav-link text-[var(--navbar-text)] hover:text-[var(--firstColor)] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--navbar-hover)] cursor-pointer font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle Slider */}
                    <div className="ml-6">
                        <button
                            onClick={toggleTheme}
                            className={`relative inline-flex items-center w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--firstColor)] ${
                                isDark 
                                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                                    : 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg'
                            }`}
                            aria-label="Toggle theme"
                        >
                            {/* Slider Track Background */}
                            <span className="sr-only">Toggle theme</span>
                            
                            {/* Slider Button */}
                            <span
                                className={`inline-flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 transform shadow-md ${
                                    isDark 
                                        ? 'translate-x-8 bg-white' 
                                        : 'translate-x-0.5 bg-white'
                                }`}
                            >
                                {/* Icon inside the slider button */}
                                {isDark ? (
                                    <svg 
                                        className="w-4 h-4 text-blue-600 transition-transform duration-300" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.293 13.293A8 8 0 0 1 6.707 2.707a8.001 8.001 0 1 0 10.586 10.586z"/>
                                    </svg>
                                ) : (
                                    <svg 
                                        className="w-4 h-4 text-yellow-500 transition-transform duration-300" 
                                        fill="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"/>
                                    </svg>
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;