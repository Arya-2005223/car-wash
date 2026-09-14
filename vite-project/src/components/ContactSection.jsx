import styles from './ContactForm.module.css'
import ContactForm from './ContactForm.jsx'

function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className="eyebrow">Get in touch</p>
            <h2>Questions before you roll in?</h2>
            <p>
              Send us a note about your vehicle, a fleet account, or a membership question
              and we'll reply within one business day.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <div>
                  <strong>Main location</strong>
                  <span>482 Harbor Mill Road, Kolkata</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M4 5h16v14H4z" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <div>
                  <strong>hello@aryasamanta.com</strong>
                  <span>We reply within one business day</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <svg className={styles.infoIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <div>
                  <strong>Open every day, 7am – 9pm</strong>
                  <span>No appointment needed for express washes</span>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
