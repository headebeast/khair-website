import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    return (
        <section className="privacy section">
            <div className="container privacy-container">
                <Link to="/" className="privacy-back">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    Back to Home
                </Link>

                <div className="privacy-card">
                    <h1>Privacy Policy</h1>
                    <span className="privacy-updated">Last updated: February 16, 2026</span>

                    <p>
                        Khair ("we", "our", or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, and safeguard your
                        information when you use our mobile application <strong>Khair</strong> (the "App").
                    </p>

                    <hr className="privacy-divider" />

                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect only the minimum information necessary to provide our
                        services. The data we collect depends on how you use the App:
                    </p>
                    <ul>
                        <li>
                            <strong>Account Information:</strong> When you sign in with Google
                            or Apple, we receive your name, email address, and profile picture
                            from the authentication provider.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> We store your dhikr counts, session
                            history, streaks, and challenge participation to sync your progress
                            across devices.
                        </li>
                        <li>
                            <strong>Preferences:</strong> Language selection, theme settings,
                            ADHD mode preference, and onboarding choices are saved locally and
                            synced to the cloud if you are signed in.
                        </li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve the App</li>
                        <li>Sync your dhikr progress across devices</li>
                        <li>Display your rank on the leaderboard</li>
                        <li>Enable challenge features with other users</li>
                        <li>Remember your language and accessibility preferences</li>
                    </ul>

                    <h2>3. Data Storage & Security</h2>
                    <p>
                        Your data is stored securely using <strong>Supabase</strong>, which
                        provides enterprise-grade security with Row Level Security (RLS)
                        policies that ensure users can only access their own data. All data
                        is transmitted over HTTPS.
                    </p>
                    <p>
                        Local data is stored on your device using encrypted local storage
                        (Hive). We do not store any data on our own servers — all cloud data
                        is managed through Supabase's infrastructure.
                    </p>

                    <h2>4. Data Sharing</h2>
                    <p>
                        <strong>We do not sell, trade, or rent your personal information</strong> to
                        third parties. We only share data in the following limited ways:
                    </p>
                    <ul>
                        <li>
                            <strong>Leaderboard:</strong> Your username, profile picture, and
                            total dhikr count are visible to other users on the public
                            leaderboard, if you have opted in.
                        </li>
                        <li>
                            <strong>Challenges:</strong> When you join a challenge, your
                            username, avatar, and challenge progress are visible to other
                            participants.
                        </li>
                    </ul>

                    <h2>5. Third-Party Services</h2>
                    <p>The App uses the following third-party services:</p>
                    <ul>
                        <li>
                            <strong>Supabase</strong> — for authentication, database, and cloud
                            sync (<a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)
                        </li>
                        <li>
                            <strong>Google Sign-In</strong> — for authentication (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)
                        </li>
                        <li>
                            <strong>Apple Sign-In</strong> — for authentication on iOS (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)
                        </li>
                    </ul>

                    <h2>6. Advertising & Tracking</h2>
                    <p>
                        <strong>Khair does not contain any advertisements.</strong> We do not
                        use any analytics trackers, advertising SDKs, or tracking pixels. We
                        do not collect device identifiers for advertising purposes.
                    </p>

                    <h2>7. Children's Privacy</h2>
                    <p>
                        The App is suitable for users of all ages. We do not knowingly collect
                        personal information from children under 13 without parental consent.
                        If you believe a child has provided us with personal information,
                        please contact us and we will promptly delete it.
                    </p>

                    <h2>8. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your account and all associated data</li>
                        <li>Use the App without creating an account (limited features)</li>
                    </ul>
                    <p>
                        To delete your account and all data, go to{' '}
                        <strong>Profile → Settings → Delete Account</strong> within the App,
                        or contact us directly.
                    </p>

                    <h2>9. Data Retention</h2>
                    <p>
                        We retain your data for as long as your account is active. If you
                        delete your account, all associated data is permanently removed from
                        our systems within 30 days.
                    </p>

                    <h2>10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify
                        you of any changes by updating the "Last updated" date at the top of
                        this page. Continued use of the App after changes constitutes
                        acceptance of the revised policy.
                    </p>

                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy,
                        please contact us at:
                    </p>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:khairapp@outlook.com">khairapp@outlook.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
