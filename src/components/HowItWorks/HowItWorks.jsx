import './HowItWorks.css';

const STEPS = [
    {
        num: '1',
        title: 'Download the App',
        desc: 'Get Khair free on Android. No sign-up required — start counting instantly.',
    },
    {
        num: '2',
        title: 'Pick Your Dhikr',
        desc: 'Choose from Tasbih, Istighfar, Salawat, and more — with authentic Arabic text and translations.',
    },
    {
        num: '3',
        title: 'Tap & Grow',
        desc: 'Tap to count, build streaks, climb the leaderboard, and challenge friends along the way.',
    },
];

export default function HowItWorks() {
    return (
        <section className="how-it-works section" id="how-it-works">
            <div className="blur-shape how-it-works-blur-1" aria-hidden="true" />
            <div className="blur-shape how-it-works-blur-2" aria-hidden="true" />

            <div className="container">
                <div className="how-header">
                    <span className="how-label">🚀 Get Started</span>
                    <h2 className="how-title">Three Steps to Spiritual Growth</h2>
                    <p className="how-subtitle">
                        From download to your first completed round — it takes less than a
                        minute.
                    </p>
                </div>

                <div className="how-steps">
                    {STEPS.map((s, i) => (
                        <div className="how-step" key={i}>
                            <div className="how-step-glow" aria-hidden="true" />
                            <div className="how-step-badge">{s.num}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
