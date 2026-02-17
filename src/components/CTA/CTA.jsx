import './CTA.css';

export default function CTA() {
    return (
        <section className="cta section" id="download">
            <div className="container">
                <div className="cta-container">
                    {/* Blur shapes */}
                    <div className="blur-shape cta-blur-1" aria-hidden="true" />
                    <div className="blur-shape cta-blur-2" aria-hidden="true" />
                    <div className="blur-shape cta-blur-3" aria-hidden="true" />

                    <div className="cta-content">
                        <img
                            className="cta-icon"
                            src="/app_icon.png"
                            alt="Khair app icon"
                        />

                        <h2 className="cta-title">
                            Begin Your Dhikr Journey Today
                        </h2>

                        <p className="cta-subtitle">
                            Download Khair for free and join thousands of Muslims building a
                            daily remembrance habit. Available on Android — iOS coming soon.
                        </p>

                        <div className="cta-actions">
                            <a href="#" className="cta-btn-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2.236a.5.5 0 0 0-.66-.147L3.346 10.54a1 1 0 0 0 0 1.72l13.517 8.45a.5.5 0 0 0 .76-.43V2.52a.5.5 0 0 0-.1-.284z" /></svg>
                                Google Play
                            </a>
                            <a href="#" className="cta-btn-outline">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M8 12h8M12 8v8" /></svg>
                                iOS — Coming Soon
                            </a>
                        </div>

                        <p className="cta-note">Free forever · No ads · No data tracking</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
