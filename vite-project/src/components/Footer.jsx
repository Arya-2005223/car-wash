import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className={styles.brand}>Shine Lane</div>
            <p>Express washes and full details, run by the same crew since 2013.</p>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h4>Site</h4>
              <a href="/#services">Services</a>
              <a href="/#pricing">Pricing</a>
              <a href="/#about">About</a>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className={styles.col}>
              <h4>Visit</h4>
              <span>482 Harbor Mill Road</span>
              <span>Riverton</span>
              <span>Open 7am – 9pm daily</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Shine Lane Car Wash. All rights reserved.</span>
          <div className={styles.social}>
            <a className={styles.socialBtn} href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </a>
            <a className={styles.socialBtn} href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M14 8.5h2.2V5.4h-2.4c-2.4 0-3.8 1.5-3.8 3.9v2H8v3.1h2v7.6h3.2v-7.6h2.5l.5-3.1h-3V9.6c0-.7.3-1.1 1.1-1.1z" fill="currentColor" />
              </svg>
            </a>
            <a className={styles.socialBtn} href="#" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
