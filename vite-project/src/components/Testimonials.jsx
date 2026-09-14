import styles from './Testimonials.module.css'
import { testimonials } from '../data/content.js'

function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">Customers</p>
          <h2>What the regulars say</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div className={styles.card} key={t.id}>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.footer}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
