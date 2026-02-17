import './Testimonials.css';

const TESTIMONIALS = [
    {
        stars: 5,
        text: '"Khair helped me build a consistent dhikr habit. The streaks and leaderboard keep me motivated every single day. MashaAllah!"',
        initials: 'A',
        name: 'Ahmed R.',
        role: 'Daily user, Egypt',
    },
    {
        stars: 5,
        text: '"The ADHD mode is a game-changer. Larger buttons and the focus timer help me stay present during dhikr without distractions."',
        initials: 'S',
        name: 'Sara K.',
        role: 'Student, Canada',
    },
    {
        stars: 5,
        text: '"I love challenging my friends — it turned dhikr into something we do together. The invite codes make it so easy to join."',
        initials: 'Y',
        name: 'Yusuf M.',
        role: 'Community leader, UK',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="testimonials-label">💬 Testimonials</span>
                    <h2 className="testimonials-title">Loved by the Community</h2>
                    <p className="testimonials-subtitle">
                        Hear from Muslims around the world who made Khair part of their
                        daily routine.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {TESTIMONIALS.map((t, i) => (
                        <div className="testimonial-card" key={i}>
                            <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                                {Array.from({ length: t.stars }, (_, j) => (
                                    <span key={j}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{t.initials}</div>
                                <div className="testimonial-author-info">
                                    <span className="testimonial-name">{t.name}</span>
                                    <span className="testimonial-role">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
