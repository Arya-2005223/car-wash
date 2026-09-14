import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className="eyebrow">About Arya Samanta</p>
            <h2>Started with one hose and a Saturday</h2>
            <p>
              Arya Samanta opened its first bay in 2026 with a single owner-operator and a
              waiting list scrawled on a whiteboard. Twelve years later we still run the
              same way: fast, honest, and hands-on, just with three locations and a proper
              spot-free rinse system now.
            </p>
            <p>
              We use biodegradable soap, reclaim and filter our rinse water, and train
              every crew member on hand-finishing — not just running cars through a
              tunnel and hoping for the best.
            </p>

            <div className={styles.values}>
              <div className={styles.value}>
                <h4>Water-wise</h4>
                <p>Reclaimed rinse system cuts fresh-water use by 60%.</p>
              </div>
              <div className={styles.value}>
                <h4>Locally run</h4>
                <p>Family-owned, same crew leads for over 8 years.</p>
              </div>
              <div className={styles.value}>
                <h4>No upsell pressure</h4>
                <p>The price on the ticket is the price you pay.</p>
              </div>
              <div className={styles.value}>
                <h4>Satisfaction pass</h4>
                <p>Not happy? Pull back in within 24 hours, free re-wash.</p>
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            <blockquote>
              "We built Arya Samanta because every wash we tried felt rushed. Ours doesn't."
            </blockquote>
            <cite>— Owen Samanta, Founder</cite>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
