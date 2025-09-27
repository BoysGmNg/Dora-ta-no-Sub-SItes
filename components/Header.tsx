
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = targetId ? document.querySelector(targetId) : null;
        
        if (targetElement) {
            const header = document.querySelector('header');
            const headerOffset = header ? header.offsetHeight : 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-primary-color/30 backdrop-blur-md border-b border-accent-color/20">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-orbitron font-bold text-glow">Dora-ta-no Sub</h1>
                <nav className="hidden md:flex space-x-8 text-lg">
                    <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
                    <a href="#films" className="nav-link" onClick={handleLinkClick}>Films</a>
                    <a href="#releases" className="nav-link" onClick={handleLinkClick}>Releases</a>
                    <a href="#importance" className="nav-link" onClick={handleLinkClick}>Our Mission</a>
                </nav>
                <button 
                    id="mobile-menu-button" 
                    className="md:hidden text-3xl z-10 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    &#9776;
                </button>
            </div>
            <div id="mobile-menu-container" className="md:hidden">
                <div id="mobile-menu" className={isMenuOpen ? 'menu-open' : ''}>
                    <div className="absolute top-full left-0 right-0 bg-primary-color/90 backdrop-blur-md mt-2 rounded-lg mx-4">
                        <a href="#about" className="block text-center py-4 text-lg" onClick={handleLinkClick}>About</a>
                        <a href="#films" className="block text-center py-4 text-lg" onClick={handleLinkClick}>Films</a>
                        <a href="#releases" className="block text-center py-4 text-lg" onClick={handleLinkClick}>Releases</a>
                        <a href="#importance" className="block text-center py-4 text-lg" onClick={handleLinkClick}>Our Mission</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
