import { useRef, useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'
import { stats } from '../data/content.js'

function CarIllustration({ variant }) {
  const isClean = variant === 'clean'
  const bodyColor = isClean ? '#0f5f57' : '#5a5040'
  const accent = isClean ? '#2EC4B6' : '#8b7d5e'

  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" fill={isClean ? '#dff5f2' : '#cfc4ad'} />
      {/* ground shadow */}
      <ellipse cx="200" cy="228" rx="150" ry="14" fill="rgba(16,34,43,0.12)" />
      {/* car body */}
      <path
        d="M55 195 Q60 150 100 140 L140 108 Q160 96 200 96 L250 96 Q288 96 305 128 L330 150 Q352 156 355 185 L355 200 L330 200 Q326 178 302 178 Q278 178 274 200 L140 200 Q136 178 112 178 Q88 178 84 200 L55 200 Z"
        fill={bodyColor}
        stroke={isClean ? '#083a35' : '#3f3826'}
        strokeWidth="3"
      />
      {/* windows */}
      <path d="M150 140 L172 112 Q186 104 210 104 L246 104 Q268 104 282 128 L295 140 Z" fill={isClean ? '#c7ecf8' : '#a5a08f'} opacity="0.9" />
      <line x1="212" y1="104" x2="212" y2="140" stroke={isClean ? '#083a35' : '#3f3826'} strokeWidth="2" />
      {/* wheels */}
      <circle cx="112" cy="200" r="26" fill="#1a1f26" />
      <circle cx="112" cy="200" r="11" fill={accent} />
      <circle cx="302" cy="200" r="26" fill="#1a1f26" />
      <circle cx="302" cy="200" r="11" fill={accent} />

      {isClean ? (
        <>
          <line x1="90" y1="150" x2="130" y2="140" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
          <line x1="230" y1="120" x2="280" y2="130" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
          <circle cx="330" cy="110" r="4" fill="#FFC53D" />
          <circle cx="345" cy="130" r="3" fill="#FFC53D" />
          <circle cx="60" cy="120" r="3" fill="#FFC53D" />
        </>
      ) : (
        <>
          <circle cx="120" cy="165" r="4" fill="#6b5f45" opacity="0.7" />
          <circle cx="145" cy="185" r="3" fill="#6b5f45" opacity="0.6" />
          <circle cx="270" cy="170" r="5" fill="#6b5f45" opacity="0.7" />
          <circle cx="230" cy="190" r="3" fill="#6b5f45" opacity="0.6" />
          <circle cx="185" cy="160" r="3.5" fill="#6b5f45" opacity="0.6" />
          <path d="M100 175 Q120 180 140 178" stroke="#6b5f45" strokeWidth="2" opacity="0.5" fill="none" />
        </>
      )}
    </svg>
  )
}

function Hero() {
  const trackRef = useRef(null)
  const [percent, setPercent] = useState(45)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = trackRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPercent(Math.min(96, Math.max(4, pct)))
  }, [])

  const onPointerDown = (e) => {
    draggingRef.current = true
    updateFromClientX(e.clientX ?? e.touches?.[0]?.clientX)
  }

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return
      const clientX = e.clientX ?? e.touches?.[0]?.clientX
      if (clientX != null) updateFromClientX(clientX)
    }
    const onUp = () => {
      draggingRef.current = false
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchend', onUp)
    }
  }, [updateFromClientX])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPercent((p) => Math.max(4, p - 5))
    if (e.key === 'ArrowRight') setPercent((p) => Math.min(96, p + 5))
  }

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className="eyebrow">Open 7am – 9pm · every day</p>
            <h1>
              Drive in dusty.
              <br />
              Drive out <span>shining.</span>
            </h1>
            <p>
              Express exterior washes in under 12 minutes, full interior details when you
              need them, and an unlimited plan for the days you don't want to think about it.
            </p>
            <div className={styles.ctaRow}>
              <Link to="/contact" className="btn btn-primary">
                Book a wash
              </Link>
              <a href="#pricing" className="btn btn-ghost">
                See pricing
              </a>
            </div>
            <p className={styles.microNote}>No appointment needed for express washes — just pull up.</p>
          </div>

          <div className={styles.sliderWrap}>
            <p className={styles.sliderHint}>Drag the squeegee →</p>
            <div
              className={styles.slider}
              ref={trackRef}
              onMouseDown={onPointerDown}
              onTouchStart={onPointerDown}
              role="slider"
              tabIndex={0}
              aria-label="Drag to compare dirty and clean car"
              aria-valuenow={Math.round(percent)}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={onKeyDown}
            >
              <div className={`${styles.layer} ${styles.dirty}`}>
                <CarIllustration variant="dirty" />
              </div>
              <div
                className={`${styles.layer} ${styles.clean}`}
                style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
              >
                <CarIllustration variant="clean" />
              </div>

              <span className={`${styles.label} ${styles.labelDirty}`}>Before</span>
              <span className={`${styles.label} ${styles.labelClean}`}>After</span>

              <div className={styles.handle} style={{ left: `${percent}%` }}>
                <div className={styles.handleLine} />
                <div className={styles.handleGrip}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 5l-4 5 4 5M14 5l4 5-4 5" stroke="#0B3142" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div className={styles.stat} key={s.id}>
              <div className="value">{s.value}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
