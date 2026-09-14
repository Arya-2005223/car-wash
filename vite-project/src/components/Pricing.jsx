import styles from './Pricing.module.css'
import { pricingPlans } from '../data/content.js'

function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">Pricing</p>
          <h2>Every price, right on the ticket</h2>
          <p>No hidden add-ons. Pay per wash, or go unlimited on our Shine plan for one car.</p>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.ticket} ${plan.highlight ? styles.ticketHighlight : ''}`}
            >
              {plan.highlight && <span className={styles.badge}>Most popular</span>}
              <div className={styles.top}>
                <div className={styles.ticketNo}>TICKET NO. {plan.ticketNo}</div>
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.desc}>{plan.description}</p>
              </div>

              <div className={styles.perforation}>
                <span className={`${styles.notch} ${styles.notchLeft}`} />
                <span className={`${styles.notch} ${styles.notchRight}`} />
              </div>

              <div className={styles.bottom}>
                <div className={styles.priceRow}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.per}>/ {plan.unit}</span>
                </div>
                <a href="/contact" className="btn btn-dark">
                  {plan.monthly ? 'Start plan' : 'Book this wash'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
