import './Hero.css';

export default function Hero() {
    const beads = Array.from({ length: 33 }, (_, i) => i);

    return (
        <section className="hero section" id="hero">
            <div className="container">
                <div className="hero-container">
                    {/* Organic blur shapes */}
                    <div className="blur-shape hero-blur-1" aria-hidden="true" />
                    <div className="blur-shape hero-blur-2" aria-hidden="true" />
                    <div className="blur-shape hero-blur-3" aria-hidden="true" />

                    <div className="hero-content">
                        {/* Text side */}
                        <div className="hero-text">
                            <div className="hero-badge">
                                <span className="hero-badge-dot" />
                                20 Languages Supported
                            </div>

                            <h1 className="hero-headline">
                                Your Daily <span className="highlight">Dhikr</span> Companion
                            </h1>

                            <p className="hero-subtitle">
                                Count your dhikr, build streaks, challenge friends, and grow
                                closer to Allah — all in a beautifully crafted, distraction‑free
                                app.
                            </p>

                            <div className="hero-actions">
                                <a href="#download" className="btn btn-filled btn-lg">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
                                    Download Free
                                </a>
                                <a href="#features" className="btn btn-tonal btn-lg">
                                    Explore Features
                                </a>
                            </div>

                            <div className="hero-stats">
                                <div className="hero-stat">
                                    <span className="hero-stat-value">10K+</span>
                                    <span className="hero-stat-label">Dhikr Counted</span>
                                </div>
                                <div className="hero-stat">
                                    <span className="hero-stat-value">20</span>
                                    <span className="hero-stat-label">Languages</span>
                                </div>
                                <div className="hero-stat">
                                    <span className="hero-stat-value">100%</span>
                                    <span className="hero-stat-label">Free & Open</span>
                                </div>
                            </div>
                        </div>

                        {/* Phone mockup */}
                        <div className="hero-visual">
                            <div className="hero-glow" aria-hidden="true" />
                            <div className="hero-phone">
                                <div className="hero-phone-frame">
                                    <div className="hero-phone-screen">
                                        <img
                                            className="phone-app-icon"
                                            src="/app_icon.png"
                                            alt="Khair app icon"
                                        />
                                        <span className="phone-counter">33</span>
                                        <span className="phone-label">SubhanAllah</span>
                                        <div className="phone-beads" aria-hidden="true">
                                            {beads.map(i => (
                                                <span
                                                    key={i}
                                                    className={`phone-bead${i < 12 ? ' active' : ''}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
