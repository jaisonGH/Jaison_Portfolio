
import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code2,
  CalendarDays,
  X,
  Copy,
  ExternalLink,
} from 'lucide-react'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [copied, setCopied] = useState('')

  const copyText = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('Please copy manually')
    }
  }

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="navbar">
        <a className="brand" href="#home">JT<span>.</span></a>
        <div className="nav-links">
          <a href="#story">My Journey</a>
          <a href="#education">Education</a>
          <a href="#daksh">Leadership</a>
          <button onClick={() => setContactOpen(true)}>
            Let's Connect <ArrowUpRight size={15} />
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="eyebrow"><span className="status-dot" /> MY CAREER STORY</div>
            <h1>Jaison<br /><span>Thomas.</span></h1>
            <p className="hero-subtitle">
              From curiosity about computers to building a career in technology.
            </p>
            <p className="hero-description">
              A journey through learning, problem-solving, leadership and
              the experiences that shaped the professional I am today.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#story">
                Explore my journey <ArrowDown size={17} />
              </a>
              <button className="text-button" onClick={() => setContactOpen(true)}>
                Get in touch <ArrowUpRight size={17} />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-side"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          >
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-monogram">JT</div>
            <div className="hero-side-label">
              <span>BASED IN</span>
              <strong><MapPin size={14} /> Melbourne, Australia</strong>
            </div>
            <div className="hero-year">2016 — NOW</div>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
          <span>01 / MY JOURNEY</span>
        </div>
      </section>

      <section className="chapter-intro" id="story">
        <motion.div className="section-kicker" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span>THE STORY SO FAR</span>
          <span className="kicker-line" />
          <span>01 — 06</span>
        </motion.div>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Every journey has<br />
          <span>a starting point.</span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          Mine began with a curiosity about technology and a desire to
          understand how things work. That curiosity became a direction,
          and that direction became a career.
        </motion.p>
      </section>

      <section className="chapter education-chapter" id="education">
        <div className="chapter-number">CHAPTER 01 <span>·</span> THE FOUNDATION</div>

        <div className="chapter-heading">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="chapter-overline">2016 — 2019</p>
            <h2>The years that<br /><span>started it all.</span></h2>
            <p className="chapter-lead">
              A growing interest in computers and technology led me to
              pursue a Master of Computer Applications, with the ambition
              of becoming a software developer.
            </p>
          </motion.div>

          <motion.div
            className="college-image-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/kristu-jyoti-college.jpg"
              alt="Kristu Jyoti College of Management and Technology"
            />
            <div className="college-image-overlay">
              <span>THE BEGINNING</span>
              <h3>Kristu Jyoti College</h3>
              <p>Changanassery, Kerala · 2016</p>
            </div>
            <div className="image-corner-label">01 / 03</div>
          </motion.div>
        </div>

        <div className="education-details">
          <div className="education-icon"><GraduationCap size={25} /></div>
          <div>
            <span className="detail-label">MASTER OF COMPUTER APPLICATIONS</span>
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Kristu Jyoti College of Management and Technology</p>
          </div>
          <span className="education-period">2016 — 2019</span>
        </div>

        <motion.div
          className="project-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="project-topline">
            <span>ACADEMIC PROJECT</span>
            <span>INDIVIDUAL PROJECT · 2015 — 2016</span>
          </div>

          <div className="project-layout">
            <div className="project-copy">
              <div className="project-icon"><Code2 size={22} /></div>
              <h3>E-SEDAN</h3>
              <h4>Online Car Rental System</h4>
              <p>
                An online platform designed to connect people who wanted to
                rent out their cars with customers looking to hire one.
                Car owners could submit their vehicles for review. Once the
                details were checked and approved, the vehicles became
                available for customers to search and rent.
              </p>
              <div className="contribution">
                <span className="detail-label">MY CONTRIBUTION</span>
                <p>
                  I independently handled the project, including database
                  design, the ASP.NET frontend, the vehicle submission and
                  approval process, and the search and rental functionality.
                </p>
              </div>
            </div>

            <div className="tech-stack">
              <span className="detail-label">TECHNOLOGY STACK</span>

              <div className="tech-item">
                <div className="tech-symbol">ASP</div>
                <div>
                  <strong>ASP.NET</strong>
                  <span>Frontend</span>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-symbol">SQL</div>
                <div>
                  <strong>MS SQL Server 2008</strong>
                  <span>Database</span>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-symbol">VS</div>
                <div>
                  <strong>Visual Studio 2010</strong>
                  <span>Development IDE</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="chapter daksh-chapter" id="daksh">
        <div className="chapter-number">CHAPTER 02 <span>·</span> LEADERSHIP</div>

        <div className="daksh-layout">
          <div className="daksh-copy">
            <p className="chapter-overline">2019 · NATIONAL-LEVEL IT FEST</p>
            <h2>More than<br /><span>just an event.</span></h2>
            <p className="chapter-lead">
              During my MCA, I had the opportunity to lead DAKSH, a
              national-level IT fest organised by Kristu Jyoti College.
              I served as its overall president.
            </p>

            <div className="daksh-stats">
              <div><strong>2,000<span>+</span></strong><small>STUDENT PARTICIPANTS</small></div>
              <div><strong>90<span>+</span></strong><small>VOLUNTEERS</small></div>
            </div>

            <div className="contribution">
              <span className="detail-label">MY RESPONSIBILITIES</span>
              <p>
                Coordinating teams, planning events, managing budgets,
                inviting colleges, handling sponsors and making key
                decisions throughout the event.
              </p>
            </div>
          </div>

          <motion.div
            className="daksh-photo"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src="/images/daksh-2019.jpeg" alt="DAKSH 2019 national-level IT fest" />
            <div className="photo-caption">
              <span>DAKSH · 2019</span>
              <strong>Overall President</strong>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="graduation-section">
        <div className="chapter-number">CHAPTER 03 <span>·</span> A MILESTONE</div>
        <div className="graduation-layout">
          <motion.div
            className="graduation-photo"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/images/mca-graduation.jpeg" alt="MCA graduation ceremony" />
          </motion.div>

          <motion.div
            className="graduation-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="chapter-overline">2019 · GRADUATION</p>
            <h2>Ready for<br /><span>what comes next.</span></h2>
            <p>
              Completing my MCA was more than finishing a qualification.
              It felt like I was ready to step into the IT industry and
              turn what I had learned into real-world experience.
            </p>
            <div className="milestone-note">
              <CalendarDays size={18} />
              <span>Graduation came before my professional journey began.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="next-chapter">
        <div className="chapter-number">CHAPTER 04 <span>·</span> THE PROFESSIONAL JOURNEY</div>
        <motion.div
          className="next-chapter-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="next-chapter-year">15 JULY 2019</span>
          <h2>And then,<br /><span>the real learning began.</span></h2>
          <p>
            I secured a campus placement with Tata Consultancy Services
            while I was still completing my MCA. On 15 July 2019, I began
            my professional journey as a Systems Engineer.
          </p>
          <div className="tcs-mark">TCS <span>→</span></div>
          <span className="next-chapter-hint">THE NEXT CHAPTER IS JUST BEGINNING</span>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <p className="chapter-overline">LET'S CONNECT</p>
            <h2>Every good story<br /><span>continues.</span></h2>
          </div>
          <button className="primary-button" onClick={() => setContactOpen(true)}>
            Get in touch <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="footer-bottom">
          <a className="brand" href="#home">JT<span>.</span></a>
          <span>© {new Date().getFullYear()} Jaison Thomas</span>
          <div className="footer-socials">
            <a href="mailto:write2jais22@gmail.com" aria-label="Email"><Mail size={17} /></a>
            <a href="tel:+61423603560" aria-label="Phone"><Phone size={17} /></a>
            <a href="https://www.linkedin.com/in/jaison-thomas-5213a51b0/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><ExternalLink size={17} /></a>
          </div>
        </div>
      </footer>

      {contactOpen && (
        <div className="modal-backdrop" onClick={() => setContactOpen(false)}>
          <div className="contact-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setContactOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
            <p className="chapter-overline">GET IN TOUCH</p>
            <h2>Let's start<br /><span>a conversation.</span></h2>

            <div className="contact-row">
              <div className="contact-row-icon"><Mail size={18} /></div>
              <div><small>EMAIL</small><strong>write2jais22@gmail.com</strong></div>
              <button onClick={() => copyText('write2jais22@gmail.com', 'email')} aria-label="Copy email"><Copy size={16} /></button>
            </div>

            <div className="contact-row">
              <div className="contact-row-icon"><Phone size={18} /></div>
              <div><small>PHONE</small><strong>+61 423 603 560</strong></div>
              <button onClick={() => copyText('+61423603560', 'phone')} aria-label="Copy phone"><Copy size={16} /></button>
            </div>

            <a className="contact-row linkedin-row" href="https://www.linkedin.com/in/jaison-thomas-5213a51b0/" target="_blank" rel="noreferrer">
              <div className="contact-row-icon"><ExternalLink size={18} /></div>
              <div><small>LINKEDIN</small><strong>Connect with me</strong></div>
              <ExternalLink size={16} />
            </a>
            {copied && <p className="copy-feedback">{copied === 'Please copy manually' ? copied : `${copied} copied!`}</p>}
          </div>
        </div>
      )}
    </main>
  )
}

export default App
