import { motion } from 'motion/react'
import {
  Monitor,
  Settings,
  Users,
  Wrench,
} from 'lucide-react'

import './Woodside.css'

function Woodside() {
  return (
    <section className="woodside-section" id="woodside">
      <div className="woodside-container">

        <div className="section-label">
          <span>08</span>
          PROFESSIONAL EXPERIENCE
        </div>

        <motion.div
          className="woodside-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">
            ENTERPRISE IT SUPPORT
          </p>

          <h2>
            Supporting technology.
            <br />
            <span>Supporting people.</span>
          </h2>

          <p className="woodside-company">
            Woodside Energy · Melbourne, Australia
          </p>

          <h3>EUC Support Deployment Engineer</h3>
          <p className="woodside-date">November 2026</p>
        </motion.div>

        <div className="woodside-grid">

          <article className="woodside-card">
            <Monitor size={25} />
            <h3>End User Computing</h3>
            <p>
              Provided technical support for end-user
              computing environments and assisted with
              deployment-related activities.
            </p>
          </article>

          <article className="woodside-card">
            <Settings size={25} />
            <h3>SCCM Support</h3>
            <p>
              Worked with SCCM as part of enterprise
              device deployment and support activities.
            </p>
          </article>

          <article className="woodside-card">
            <Users size={25} />
            <h3>Active Directory & Access</h3>
            <p>
              Supported Active Directory and user
              access-related activities.
            </p>
          </article>

          <article className="woodside-card">
            <Wrench size={25} />
            <h3>Technical Troubleshooting</h3>
            <p>
              Investigated technical issues and
              supported resolution of end-user
              computing problems.
            </p>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Woodside