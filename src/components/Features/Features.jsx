import './Features.css';

const FEATURES = [
    {
        icon: '📿',
        iconStyle: 'purple',
        glowColor: 'var(--md-primary)',
        title: 'Tasbih Counter',
        desc: 'Animated beads that glide with each tap. Feel the rhythm of your dhikr with satisfying haptic feedback and smooth motion.',
    },
    {
        icon: '🔥',
        iconStyle: 'rose',
        glowColor: 'var(--md-tertiary)',
        title: 'Streaks & Goals',
        desc: 'Build powerful daily habits. Track your streak, earn hasanat, and never miss a day of remembrance.',
    },
    {
        icon: '🏆',
        iconStyle: 'lavender',
        glowColor: 'var(--md-secondary)',
        title: 'Leaderboard',
        desc: 'See where you stand among fellow practitioners. A friendly way to stay motivated on your spiritual journey.',
    },
    {
        icon: '⚔️',
        iconStyle: 'purple',
        glowColor: 'var(--md-primary)',
        title: 'Challenge Friends',
        desc: 'Create challenges with invite codes. Compete with friends, track progress together and grow in faith as a community.',
    },
    {
        icon: '🌍',
        iconStyle: 'rose',
        glowColor: 'var(--md-tertiary)',
        title: '20 Languages',
        desc: 'From Arabic to Swahili, Urdu to Japanese — use Khair in the language you\'re most comfortable with.',
    },
    {
        icon: '🧠',
        iconStyle: 'lavender',
        glowColor: 'var(--md-secondary)',
        title: 'ADHD‑Friendly Mode',
        desc: 'Larger touch targets, calmer animations, built-in focus timer, and haptic cues designed for sustained focus.',
    },
];

export default function Features() {
    return (
        <section className="features section" id="features">
            <div className="container">
                <div className="features-header">
                    <span className="features-label">✨ Features</span>
                    <h2 className="features-title">Everything You Need for Dhikr</h2>
                    <p className="features-subtitle">
                        Thoughtfully designed features that make your daily remembrance
                        effortless, engaging, and rewarding.
                    </p>
                </div>

                <div className="features-grid">
                    {FEATURES.map((f, i) => (
                        <div className="feature-card" key={i}>
                            <div
                                className="feature-card-glow"
                                style={{ background: f.glowColor }}
                                aria-hidden="true"
                            />
                            <div className={`feature-icon ${f.iconStyle}`}>{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
