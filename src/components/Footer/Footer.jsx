import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <img src="/app_icon.png" alt="" />
                        <span>Khair</span>
                    </div>

                    <nav className="footer-links" aria-label="Footer navigation">
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#download">Download</a>
                        <Link to="/privacy">Privacy Policy</Link>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <span className="footer-copy">© {year} Khair. All rights reserved.</span>
                    <span className="footer-made">Made with ❤️ for the Ummah</span>
                </div>
            </div>
        </footer>
    );
}
