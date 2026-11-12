
import { useRef } from 'react'
import { motion } from 'motion/react'
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  ShieldCheck,
  ScanSearch,
  FileText,
  Bug,
  Server,
  CheckCircle2,
} from 'lucide-react'

import './RMIT.css'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

function RMIT() {
  const graduationDialogRef = useRef(null)
  const graduationImage = `${import.meta.env.BASE_URL}images/rmit-graduation.jpeg`

  return (
    <>
      {/* TRANSITION FROM TCS TO CYBERSECURITY */}
      <section className="career-transition">
        <div className="rmit-container">
          <div className="section-label">
            <span>05</span>
            A NEW DIRECTION
          </div>

          <motion.div
            className="transition-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <p className="section-kicker">THE TURNING POINT</p>

            <h2>
              An interest that
              <br />
              <span>became a career direction.</span>
            </h2>

            <p>
              During my time at TCS, I had opportunities to work on
              access-related processes and maintain documentation
              required for security audits. I also had the chance to
              interact with the security team and learn more about
              their work.
            </p>

            <p>
              Those experiences sparked my interest in cybersecurity.
              I wanted to understand the field beyond what I had
              encountered in enterprise support and build the knowledge
              needed to pursue it professionally.
            </p>

            <div className="transition-conclusion">
              <ShieldCheck size={21} />
              <span>
                That interest led me to pursue my second Master's degree
                in Cyber Security at RMIT University.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RMIT EDUCATION */}
      <section className="rmit-section" id="rmit">
        <div className="rmit-container">
          <div className="section-label">
            <span>06</span>
            THE NEXT CHAPTER
          </div>

          <div className="rmit-heading">
            <div>
              <p className="section-kicker">SECOND MASTER'S DEGREE</p>
              <h2>
                Master of
                <br />
                <span>Cyber Security.</span>
              </h2>
            </div>

            <span className="rmit-period">2023 — 2025</span>
          </div>

          <div className="rmit-education-card">
            <div className="rmit-university-panel">
              <div className="rmit-monogram">RMIT</div>
              <p>ROYAL MELBOURNE INSTITUTE OF TECHNOLOGY</p>
              <div className="rmit-panel-line" />
              <span>MELBOURNE · AUSTRALIA</span>
            </div>

            <div className="rmit-education-copy">
              <div className="rmit-icon">
                <GraduationCap size={23} />
              </div>

              <p className="card-kicker">POSTGRADUATE EDUCATION</p>
              <h3>Master of Cyber Security</h3>
              <p className="rmit-institution">RMIT University</p>

              <p>
                I joined RMIT to build on my earlier IT experience and
                develop a deeper understanding of cybersecurity.
                My studies helped me explore security concepts,
                understand risks and develop the technical foundation
                to move towards a career in cyber security.
              </p>

              <div className="rmit-details">
                <span>
                  <CalendarDays size={15} />
                  2023 – 2025
                </span>
                <span>
                  <MapPin size={15} />
                  Melbourne, Australia
                </span>
              </div>
            </div>
          </div>

          {/* GRADUATION */}
          <div className="rmit-graduation">
            <button
              className="rmit-graduation-photo zoomable-photo"
              type="button"
              aria-label="Enlarge RMIT graduation photograph"
              onClick={() => graduationDialogRef.current?.showModal()}
            >
              <img
                src={graduationImage}
                alt="Jaison at his RMIT Master of Cyber Security graduation in 2025"
                loading="lazy"
              />
              <span className="rmit-photo-zoom-hint" aria-hidden="true">Click to enlarge</span>
            </button>

            <div className="rmit-graduation-copy">
              <p className="section-kicker">A MILESTONE IN MELBOURNE</p>
              <h3>
                A second Master's.
                <br />
                A new professional direction.
              </h3>
              <p>
                Graduating in 2025 marked an important milestone.
                It brought together my earlier experience in enterprise
                technology and the knowledge I had developed in
                cybersecurity.
              </p>

              <div className="rmit-graduation-date">
                <CheckCircle2 size={18} />
                <span>Master of Cyber Security · 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XSPECTRE INTERNSHIP */}
      <section className="xspectre-section" id="xspectre">
        <div className="rmit-container">
          <div className="section-label">
            <span>07</span>
            LEARNING BEYOND THE CLASSROOM
          </div>

          <header className="xspectre-heading">
            <div>
              <p className="section-kicker">PRACTICAL CYBERSECURITY EXPERIENCE</p>
              <h2>
                Putting security
                <br />
                <span>knowledge into practice.</span>
              </h2>
            </div>

            <span className="xspectre-period">APRIL – JUNE 2025</span>
          </header>

          <div className="xspectre-company">
            <div className="xspectre-company-mark">
              <ShieldCheck size={30} />
            </div>

            <div>
              <h3>XSPECTRE Cybersecurity</h3>
              <p>
                Vulnerability Management Intern · April – June 2025
                <br />
                Greensborough, Melbourne, Australia
              </p>
            </div>
          </div>

          <p className="xspectre-intro">
            Alongside my studies at RMIT, I gained practical exposure
            to vulnerability management in a cybersecurity startup
            environment. I worked on scanner setup, security assessments,
            vulnerability analysis and reporting.
          </p>

          <div className="xspectre-work-grid">
            <article className="xspectre-work-card">
              <div className="xspectre-work-icon">
                <Server size={20} />
              </div>
              <span>01 / SCANNER SETUP</span>
              <h3>Building a vulnerability scanner.</h3>
              <p>
                Set up a Linux-based vulnerability scanning environment
                using Greenbone Community Edition (GVM), including scanner
                configuration and feed updates. Resolved a technical issue
                that was preventing the scanner from functioning correctly.
              </p>
              <div className="xspectre-tags">
                <span>Linux</span>
                <span>Greenbone</span>
                <span>GVM</span>
              </div>
            </article>

            <article className="xspectre-work-card">
              <div className="xspectre-work-icon">
                <ScanSearch size={20} />
              </div>
              <span>02 / SECURITY ASSESSMENTS</span>
              <h3>Scanning different environments.</h3>
              <p>
                Supported vulnerability assessments across perimeter,
                on-premises and web application environments to identify
                potential security weaknesses.
              </p>
              <div className="xspectre-tags">
                <span>Perimeter scanning</span>
                <span>On-premises</span>
                <span>Web applications</span>
              </div>
            </article>

            <article className="xspectre-work-card">
              <div className="xspectre-work-icon">
                <Bug size={20} />
              </div>
              <span>03 / VULNERABILITY ANALYSIS</span>
              <h3>Understanding vulnerabilities and risk.</h3>
              <p>
                Reviewed scan findings, analysed CVEs and considered
                severity and exploitability when preparing vulnerability
                assessment reports. Reviewed potential false positives,
                including cases involving hidden software versions.
              </p>
              <div className="xspectre-tags">
                <span>CVE analysis</span>
                <span>Risk assessment</span>
                <span>False-positive review</span>
              </div>
            </article>

            <article className="xspectre-work-card">
              <div className="xspectre-work-icon">
                <FileText size={20} />
              </div>
              <span>04 / REPORTING & DOCUMENTATION</span>
              <h3>Making findings useful.</h3>
              <p>
                Prepared vulnerability and risk reports and documented
                scanning procedures to support repeatable assessment
                activities and knowledge sharing.
              </p>
              <div className="xspectre-tags">
                <span>Risk reporting</span>
                <span>Documentation</span>
                <span>Knowledge sharing</span>
              </div>
            </article>
          </div>

          <div className="xspectre-learning">
            <div className="xspectre-learning-icon">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <p className="section-kicker">WHAT THIS EXPERIENCE TAUGHT ME</p>
              <h3>Security work starts with understanding what is exposed.</h3>
              <p>
                This internship helped me connect cybersecurity concepts
                with practical vulnerability discovery and assessment.
                It also showed me the importance of reliable scanning,
                careful analysis and clear reporting before remediation
                decisions are made.
              </p>
            </div>
          </div>
        </div>
      </section>

      <dialog
        className="rmit-photo-dialog"
        ref={graduationDialogRef}
        aria-label="RMIT graduation photograph"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <button
          type="button"
          className="rmit-photo-dialog-close"
          aria-label="Close photograph"
          onClick={() => graduationDialogRef.current?.close()}
        >
          Close ×
        </button>
        <img src={graduationImage} alt="Jaison at his RMIT Master of Cyber Security graduation in 2025" />
      </dialog>
    </>
  )
}

export default RMIT
