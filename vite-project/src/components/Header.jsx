import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <svg className={styles.logoMark} viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <circle cx="17" cy="17" r="16" stroke="#2EC4B6" strokeWidth="2" />
            <path
              d="M11 19c1.2-4 3-9 6-9s4.8 5 6 9"
              stroke="#FFC53D"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path d="M9 22c2 1.4 4.4 2 8 2s6-.6 8-2" stroke="#F6FAF9" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Shine Lane
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/contact" className="btn btn-primary">
            Get a wash
          </Link>
          <button
            className={styles.menuBtn}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
