import styles from './Services.module.css'
import { services } from '../data/content.js'

function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">What we offer</p>
          <h2>Three ways to leave shining</h2>
          <p>
            Pick the level of clean that matches your day — a quick exterior rinse, our
            most popular full-shine package, or a top-to-bottom detail.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <div className={styles.card} key={service.id}>
              <div className={styles.cardTop}>
                <h3>{service.name}</h3>
                <span className={styles.time}>{service.time}</span>
              </div>
              <p className={styles.tagline}>{service.tagline}</p>
              <ul className={styles.features}>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <svg className={styles.check} viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="#2EC4B6" opacity="0.15" />
                      <path d="M5 9.5l2.5 2.5 5.5-6" stroke="#1ea094" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#pricing" className="btn btn-dark">
                View pricing
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
