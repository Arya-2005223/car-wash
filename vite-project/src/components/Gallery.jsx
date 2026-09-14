import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Gallery.module.css'
import { galleryImages } from '../data/content.js'

function Gallery({ showViewAll = true }) {
  const trackRef = useRef(null)

  const scrollByAmount = (dir) => {
    const el = trackRef.current
    if (!el) return

    const amount = el.clientWidth * 0.8 * dir

    el.scrollBy({
      left: amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className={styles.section} id="gallery">
      <div className="container">

        {/* HEADER */}
        <div className={styles.head}>
          <div>
            <p className="eyebrow">Gallery</p>

            <h2>See the shine for yourself</h2>
          </div>

          {/* ARROWS */}
          <div className={styles.controls}>

            <button
              className={styles.controlBtn}
              onClick={() => scrollByAmount(-1)}
              aria-label="Scroll gallery left"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M11 4l-6 5 6 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className={styles.controlBtn}
              onClick={() => scrollByAmount(1)}
              aria-label="Scroll gallery right"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7 4l6 5-6 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>

        {/* GALLERY */}
        <div className={styles.track} ref={trackRef}>

          {galleryImages.map((img, i) => (

            <div
              className={styles.slide}
              key={img.id}
            >

              {/* IMAGE */}
              <img
                src={img.image}
                alt={img.label}
                className={styles.slideImage}
              />

              {/* DARK OVERLAY */}
              <div className={styles.overlay}></div>

              {/* NUMBER */}
              <span className={styles.slideIndex}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* LABEL */}
              <span className={styles.slideLabel}>
                {img.label}
              </span>

            </div>

          ))}

        </div>

        {/* VIEW ALL */}
        {showViewAll && (
          <div style={{ marginTop: 28 }}>
            <Link to="/gallery" className="btn btn-primary">
              View full gallery
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}

export default Gallery