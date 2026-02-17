import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const close = () => setMenuOpen(false);

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="header-inner">
                <a href="#" className="header-logo" aria-label="Khair home">
                    <img src="/app_icon.png" alt="" />
                    <span>Khair</span>
                </a>

                <nav className="header-nav" aria-label="Main navigation">
                    {NAV_LINKS.map(l => (
                        <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                </nav>

                <a href="#download" className="btn btn-filled btn-sm header-cta desktop-only">
                    Download
                </a>

                <button
                    className="header-menu-btn"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setMenuOpen(o => !o)}
                >
                    {menuOpen ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                    )}
                </button>
            </div>

            {/* Mobile overlay */}
            <div
                className={`header-mobile-overlay${menuOpen ? ' open' : ''}`}
                onClick={close}
                aria-hidden="true"
            />

            {/* Mobile drawer */}
            <nav
                className={`header-mobile-nav${menuOpen ? ' open' : ''}`}
                aria-label="Mobile navigation"
            >
                {NAV_LINKS.map(l => (
                    <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
                ))}
                <a href="#download" className="btn btn-filled" onClick={close}>
                    Download App
                </a>
            </nav>
        </header>
    );
}
