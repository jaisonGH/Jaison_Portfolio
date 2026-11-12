
import { createElement, forwardRef, useEffect, useState } from 'react'
// Diagnostic build: render Motion elements as plain HTML to isolate browser freezes.
// Restore the original App.jsx after testing.
const staticMotionElement = (tag) => forwardRef(function StaticMotionElement(props, ref) {
  const { initial, animate, exit, variants, transition, whileInView, viewport,
    whileHover, whileTap, layout, layoutId, ...htmlProps } = props
  return createElement(tag, { ...htmlProps, ref })
})
const motion = {
  div: staticMotionElement('div'),
  h1: staticMotionElement('h1'),
  h2: staticMotionElement('h2'),
  p: staticMotionElement('p'),
  aside: staticMotionElement('aside'),
}
function AnimatePresence({ children }) { return children }
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  CalendarDays,
  Menu,
  X,
  Copy,
  ExternalLink,
  Code2,
  BriefcaseBusiness,
  BookOpen,
  Network,
  Headphones,
  ShieldCheck,
  Activity,
  GitBranch,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
} from 'lucide-react'

import './App.css'
import './TCS.css'
import RMIT from './RMIT'
import Woodside from './Woodside'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

const timeline = [
  { year: '2016', title: 'The beginning', detail: 'Started my MCA journey', target: 'education' },
  { year: '2019', title: 'MCA Graduation', detail: 'Completed my first Master’s degree', target: 'education' },
  { year: '2019', title: 'Tata Consultancy Services', detail: 'Started as a Systems Engineer', target: 'tcs' },
  { year: '2022', title: 'A new direction', detail: 'Completed my TCS chapter', target: 'tcs' },
  { year: '2023', title: 'RMIT University', detail: 'Started my Master of Cyber Security in Melbourne', target: 'rmit' },
  { year: '2025', title: 'XSPECTRE Cybersecurity', detail: 'Vulnerability Management Internship · April to June', target: 'xspectre' },
  { year: '2025', title: 'RMIT Graduation', detail: 'Graduated with a Master of Cyber Security', target: 'rmit' },
  { year: '2026', title: 'Woodside Energy', detail: 'EUC Support Deployment Engineer · Melbourne, Australia', target: 'woodside' },
]

function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0)
      setShowBackToTop(window.scrollY > 550)
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)
    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  useEffect(() => {
    if (!contactOpen && !lightbox) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setLightbox(null)
        setContactOpen(false)
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onEscape)
    }
  }, [contactOpen, lightbox])

  const closeMenus = () => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }

  const openPhoto = (src, alt) => setLightbox({ src, alt })

  const photoKeyDown = (event, src, alt) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openPhoto(src, alt)
    }
  }

  const renderDropdown = (label, id, links) => (
    <div className={`nav-dropdown ${openDropdown === id ? 'nav-dropdown-active' : ''}`}>
      <button
        className="nav-dropdown-trigger"
        type="button"
        aria-expanded={openDropdown === id}
        aria-controls={`nav-${id}-menu`}
        onClick={() => setOpenDropdown(current => current === id ? null : id)}
      >
        {label} <ChevronDown className="dropdown-arrow" size={15} aria-hidden="true" />
      </button>
      <div className="nav-dropdown-menu" id={`nav-${id}-menu`}>
        {links.map(link => (
          <a key={link.href} href={link.href} onClick={closeMenus}>{link.label}</a>
        ))}
      </div>
    </div>
  )

  const email = 'write2jais22@gmail.com'
  const phone = '+61423603560'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <main>
      {/* Reading progress */}
      <div className="reading-progress" role="progressbar" aria-label="Page reading progress" aria-valuenow={Math.round(scrollProgress)} aria-valuemin={0} aria-valuemax={100} style={{ width: `${scrollProgress}%` }} />

      {/* NAVIGATION */}
      <nav className="navbar" aria-label="Main navigation">
        <a className="nav-logo" href="#home" onClick={closeMenus} aria-label="Jaison Thomas home">JT<span>.</span></a>
        <button className="mobile-menu-toggle" type="button"
          onClick={() => { setMobileMenuOpen(current => !current); setOpenDropdown(null) }}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen} aria-controls="primary-navigation">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div id="primary-navigation" className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
          <a href="#journey" onClick={closeMenus}>Journey</a>
          {renderDropdown('Education', 'education', [
            { href: '#education', label: 'Master of Computer Applications' },
            { href: '#rmit', label: 'Master of Cyber Security' },
          ])}
          {renderDropdown('Experience', 'experience', [
            { href: '#tcs', label: 'Tata Consultancy Services' },
            { href: '#xspectre', label: 'XSPECTRE Cybersecurity' },
            { href: '#woodside', label: 'Woodside Energy' },
          ])}
          <button type="button" onClick={() => { closeMenus(); setContactOpen(true) }}>Contact</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section" id="home">
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } },
            }}
          >
            <motion.div className="eyebrow" variants={reveal}>
              <span className="status-dot" />
              MY PROFESSIONAL JOURNEY
            </motion.div>

            <motion.h1 variants={reveal}>
              Jaison Thomas<span>.</span>
            </motion.h1>

            <motion.p className="hero-tagline" variants={reveal}>
              IT Professional <span>•</span> Cyber Security Graduate
            </motion.p>

            <motion.p className="hero-description" variants={reveal}>
              From enterprise IT support to cybersecurity, my journey
              has been shaped by hands-on experience, solving real-world
              problems and continuously learning. With over three years
              of experience at Tata Consultancy Services and a Master
              of Cyber Security from RMIT University, I'm passionate
              about building reliable, secure and efficient technology
              solutions.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <a href="#journey" className="primary-button">
                Explore my journey <ArrowDown size={16} />
              </a>

              <button
                className="secondary-button"
                onClick={() => setContactOpen(true)}
              >
                Get in touch <ArrowUpRight size={16} />
              </button>
              <a className="resume-button" href={`${import.meta.env.BASE_URL}documents/Jaison_Thomas_Resume.pdf`} download="Jaison_Thomas_Resume.pdf">
                <Download size={16} /> Download résumé
              </a>
            </motion.div>

            <motion.div className="hero-location" variants={reveal}>
              <MapPin size={15} />
              Melbourne, Australia
            </motion.div>
          </motion.div>

          <motion.aside
            className="journey-overview"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            aria-label="Career journey overview"
          >
            <div className="overview-heading">
              <span>THE JOURNEY SO FAR</span>
              <span>2016 — 2026</span>
            </div>

            <div className="overview-timeline">
              {timeline.map((item, index) => (
                <a className="overview-item overview-item-link" href={`#${item.target}`} key={`${item.year}-${index}`} aria-label={`${item.year}: ${item.title}. Jump to section`}>
                  <div className="overview-marker">
                    <span />
                  </div>
                  <div className="overview-item-copy">
                    <span className="overview-year">{item.year}</span>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            <a className="overview-link" href="#tcs">
              View professional experience <ArrowUpRight size={15} />
            </a>
          </motion.aside>
        </div>

        <a className="scroll-cue" href="#journey">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section" id="journey">
        <div className="content-width">
          <div className="section-label">
            <span>01</span>
            THE BEGINNING
          </div>

          <div className="intro-layout">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              It started with
              <br />
              <span>a curiosity for technology.</span>
            </motion.h2>

            <motion.div
              className="intro-text"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
            >
              <p>
                My journey into technology began with education, but the
                real learning came from working on projects, solving
                problems, supporting people and taking ownership of
                responsibilities.
              </p>
              <p>
                Each chapter introduced a different challenge and helped
                me understand how technology works beyond the classroom.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education-section" id="education">
        <div className="content-width">
          <div className="section-label">
            <span>02</span>
            EDUCATION
          </div>

          <div className="section-heading-row">
            <div>
              <p className="section-kicker">THE FOUNDATION</p>
              <h2>Where it all began.</h2>
            </div>
            <span className="section-date">2016 — 2019</span>
          </div>

          <div className="education-card">
            <div className="education-image zoomable-photo" role="button" tabIndex={0}
              aria-label="Enlarge Kristu Jyoti College campus" onClick={() => openPhoto(`${import.meta.env.BASE_URL}images/kristu-jyoti-college.jpg`, 'Kristu Jyoti College campus')}
              onKeyDown={(event) => photoKeyDown(event, `${import.meta.env.BASE_URL}images/kristu-jyoti-college.jpg`, 'Kristu Jyoti College campus')}>
              <img
                src={`${import.meta.env.BASE_URL}images/kristu-jyoti-college.jpg`}
                alt="Kristu Jyoti College campus"
              />
              <span className="image-caption">THE CAMPUS YEARS</span>
            </div>

            <div className="education-content">
              <div className="education-icon">
                <GraduationCap size={22} />
              </div>

              <p className="card-kicker">POSTGRADUATE EDUCATION</p>
              <h3>Master of Computer Applications</h3>
              <p className="institution">
                Kristu Jyoti College of Management and Technology
              </p>

              <p className="body-copy">
                My postgraduate studies gave me a foundation in computing,
                programming, software development and problem-solving.
                It was also where I started exploring how technology could
                solve practical business problems.
              </p>

              <div className="education-details">
                <span><CalendarDays size={15} /> 2016 – 2019</span>
                <span><MapPin size={15} /> Kerala, India</span>
              </div>
            </div>
          </div>

          {/* ACADEMIC PROJECT */}
          <div className="project-block">
            <div className="project-side-label">
              <span>ACADEMIC PROJECT</span>
              <span className="project-side-line" />
            </div>

            <div className="project-content">
              <div className="project-title-row">
                <div>
                  <p className="card-kicker">PROJECT EXPERIENCE</p>
                  <h3>E-SEDAN</h3>
                </div>
                <span className="project-number">01</span>
              </div>

              <p className="body-copy">
                An academic project that gave me an opportunity to apply
                concepts from my studies to a practical software solution.
                It helped me understand project structure, development
                workflows and the importance of translating requirements
                into working functionality.
              </p>

              <div className="tag-list">
                <span>Academic project</span>
                <span>Software development</span>
                <span>Problem solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAKSH */}
      <section className="daksh-section">
        <div className="content-width">
          <div className="section-label">
            <span>03</span>
            BEYOND THE CLASSROOM
          </div>

          <div className="daksh-layout">
            <div className="daksh-copy">
              <p className="section-kicker">ACTIVITIES & TEAMWORK</p>
              <h2>Learning to work with people.</h2>
              <p className="body-copy">
                College was not only about academics. Being involved in
                activities and working with others helped me build
                confidence, communication and coordination skills.
              </p>

              <div className="daksh-event">
                <span className="event-year">2019</span>
                <div>
                  <h3>DAKSH</h3>
                  <p>College event and team experience</p>
                </div>
              </div>
            </div>

            <div className="daksh-image zoomable-photo" role="button" tabIndex={0}
              aria-label="Enlarge DAKSH 2019" onClick={() => openPhoto(`${import.meta.env.BASE_URL}images/daksh-2019.jpeg`, 'DAKSH 2019')}
              onKeyDown={(event) => photoKeyDown(event, `${import.meta.env.BASE_URL}images/daksh-2019.jpeg`, 'DAKSH 2019')}>
              <img
                src={`${import.meta.env.BASE_URL}images/daksh-2019.jpeg`}
                alt="DAKSH 2019"
              />
              <span>DAKSH · 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* GRADUATION */}
      <section className="graduation-section">
        <div className="content-width graduation-layout">
          <div className="graduation-image zoomable-photo" role="button" tabIndex={0}
            aria-label="Enlarge MCA graduation" onClick={() => openPhoto(`${import.meta.env.BASE_URL}images/mca-graduation.jpeg`, 'MCA graduation')}
            onKeyDown={(event) => photoKeyDown(event, `${import.meta.env.BASE_URL}images/mca-graduation.jpeg`, 'MCA graduation')}>
            <img
              src={`${import.meta.env.BASE_URL}images/mca-graduation.jpeg`}
              alt="MCA graduation"
            />
          </div>

          <div className="graduation-copy">
            <div className="section-label">
              <span>THE MILESTONE</span>
            </div>

            <h2>
              One chapter completed.
              <br />
              <span>A new one waiting.</span>
            </h2>

            <p className="body-copy">
              Completing my MCA was an important milestone. It marked
              the end of my academic journey and the beginning of my
              professional life.
            </p>

            <div className="graduation-date">
              <GraduationCap size={18} />
              <span>2019 · Master of Computer Applications</span>
            </div>
          </div>
        </div>
      </section>

      {/* TCS INTRODUCTION */}
      <section className="tcs-opening" id="tcs">
        <div className="content-width">
          <div className="section-label">
            <span>04</span>
            THE PROFESSIONAL JOURNEY
          </div>

          <div className="tcs-opening-layout">
            <div className="tcs-opening-copy">
              <span className="tcs-opening-date">15 JULY 2019</span>
              <h2>
                And then,
                <br />
                <span>the real learning began.</span>
              </h2>
              <p className="body-copy">
                I secured a campus placement with Tata Consultancy Services
                while I was completing my MCA. On 15 July 2019, I began my
                professional journey as a Systems Engineer.
              </p>

              <div className="tcs-company-name">
                TATA CONSULTANCY SERVICES
                <span>Systems Engineer</span>
              </div>
            </div>

            <div className="tcs-opening-photo zoomable-photo" role="button" tabIndex={0}
              aria-label="Enlarge Tata Consultancy Services" onClick={() => openPhoto(`${import.meta.env.BASE_URL}images/tcs.jpg`, 'Tata Consultancy Services')}
              onKeyDown={(event) => photoKeyDown(event, `${import.meta.env.BASE_URL}images/tcs.jpg`, 'Tata Consultancy Services')}>
              <img
                src={`${import.meta.env.BASE_URL}images/tcs.jpg`}
                alt="Tata Consultancy Services office"
              />
              <span>TCS · 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* TCS EXPERIENCE */}
      <section className="tcs-chapter">
        <div className="tcs-container">
          <header className="tcs-heading">
            <div className="tcs-heading-top">
              <span className="tcs-kicker">PROFESSIONAL EXPERIENCE</span>
              <span className="tcs-period-label">JUL 2019 — DEC 2022</span>
            </div>

            <h2>
              Three and a half years
              <br />
              <span>of learning by doing.</span>
            </h2>

            <p className="tcs-intro">
              My time at TCS took me through development, enterprise
              application support, troubleshooting, documentation and
              operational responsibilities across different business
              environments.
            </p>
          </header>

          <div className="tcs-overview">
            <div className="tcs-overview-item">
              <strong>3.5</strong>
              <span>YEARS OF EXPERIENCE</span>
            </div>
            <div className="tcs-overview-item">
              <strong>50+</strong>
              <span>SOPS & KNOWLEDGE ARTICLES</span>
            </div>
            <div className="tcs-overview-item">
              <strong>600+</strong>
              <span>STORES IN MIGRATION PROJECT</span>
            </div>
          </div>

          <div className="tcs-timeline">

            <article className="tcs-timeline-item">
              <div className="tcs-timeline-marker">
                <Code2 size={18} />
              </div>
              <div className="tcs-timeline-content">
                <div className="tcs-item-meta">
                  <span>01 / DEVELOPMENT</span>
                  <span>TRAVEL & TOURISM</span>
                </div>
                <h3>My first step into enterprise technology.</h3>
                <p>
                  I started my career working in the Travel & Tourism
                  domain, contributing to development and unit testing
                  activities involving Adaptris data exchange solutions.
                </p>
                <p>
                  The work supported data exchange between systems used
                  for airline reservations and hotel bookings. This
                  experience introduced me to enterprise application
                  workflows, development practices and the importance
                  of reliable integrations.
                </p>
                <div className="tcs-tags">
                  <span>Adaptris</span>
                  <span>Travel & Tourism</span>
                  <span>Development</span>
                  <span>Unit testing</span>
                  <span>Data exchange</span>
                </div>
              </div>
            </article>

            <article className="tcs-timeline-item">
              <div className="tcs-timeline-marker">
                <GitBranch size={18} />
              </div>
              <div className="tcs-timeline-content">
                <div className="tcs-item-meta">
                  <span>02 / PROJECT TRANSITION</span>
                  <span>KNOWLEDGE TRANSFER</span>
                </div>
                <h3>Moving into a new project and taking ownership.</h3>
                <p>
                  I later transitioned into a retail technology project.
                  Through knowledge-transfer sessions, reviewing existing
                  documentation and understanding application workflows,
                  I gradually took ownership of my assigned responsibilities.
                </p>
                <p>
                  This transition taught me how to learn an unfamiliar
                  environment, understand dependencies and become productive
                  while supporting an established enterprise application.
                </p>
                <div className="tcs-tags">
                  <span>Knowledge transfer</span>
                  <span>Application understanding</span>
                  <span>Project handover</span>
                  <span>Ownership</span>
                </div>
              </div>
            </article>

            <article className="tcs-timeline-item">
              <div className="tcs-timeline-marker">
                <Headphones size={18} />
              </div>
              <div className="tcs-timeline-content">
                <div className="tcs-item-meta">
                  <span>03 / ENTERPRISE OPERATIONS</span>
                  <span>L1 — L3 SUPPORT</span>
                </div>
                <h3>Understanding the business behind the technology.</h3>
                <p>
                  My responsibilities expanded into enterprise application
                  support, troubleshooting incidents, investigating recurring
                  issues and coordinating with relevant teams to restore
                  services.
                </p>
                <p>
                  I worked with ITIL-aligned ticketing and incident-management
                  processes, supported operational activities and helped
                  coordinate work during night shifts. Root-cause analysis
                  became an important part of how I approached problems.
                </p>
                <div className="tcs-tags">
                  <span>L1–L3 support</span>
                  <span>Troubleshooting</span>
                  <span>Incident management</span>
                  <span>Root-cause analysis</span>
                  <span>Night shift coordination</span>
                </div>
              </div>
            </article>

            <article className="tcs-timeline-item">
              <div className="tcs-timeline-marker">
                <ShieldCheck size={18} />
              </div>
              <div className="tcs-timeline-content">
                <div className="tcs-item-meta">
                  <span>04 / ACCESS-RELATED OPERATIONS</span>
                  <span>DOCUMENTATION & AUDITS</span>
                </div>
                <h3>Working with access requests and audit documentation.</h3>
                <p>
                  I handled access-related requests and provisioning
                  activities as part of operational support. I also updated
                  and maintained access-related documentation required for
                  audit purposes.
                </p>
                <p>
                  This gave me practical exposure to access processes,
                  operational controls and the importance of maintaining
                  accurate records in an enterprise environment.
                </p>
                <div className="tcs-tags">
                  <span>Access requests</span>
                  <span>Access provisioning</span>
                  <span>Active Directory operations</span>
                  <span>Audit documentation</span>
                </div>
              </div>
            </article>

            <article className="tcs-timeline-item">
              <div className="tcs-timeline-marker">
                <BookOpen size={18} />
              </div>
              <div className="tcs-timeline-content">
                <div className="tcs-item-meta">
                  <span>05 / KNOWLEDGE SHARING</span>
                  <span>PROCESS IMPROVEMENT</span>
                </div>
                <h3>Making knowledge easier for the next person.</h3>
                <p>
                  I created and maintained more than 50 standard operating
                  procedures and knowledge-base articles to document common
                  processes, troubleshooting steps and operational procedures.
                </p>
                <p>
                  I also helped train new team members and share knowledge
                  across the team. These improvements contributed to reducing
                  repeat incidents by approximately 20%.
                </p>

                <div className="tcs-impact">
                  <strong>50+</strong>
                  <div>
                    <b>SOPs & knowledge-base articles</b>
                    <span>Documenting processes and making support knowledge reusable.</span>
                  </div>
                </div>

                <div className="tcs-tags">
                  <span>Documentation</span>
                  <span>Knowledge management</span>
                  <span>Team training</span>
                  <span>Process improvement</span>
                </div>
              </div>
            </article>

            <article className="tcs-timeline-item">
              <div className="tcs-timeline-marker">
                <Network size={18} />
              </div>
              <div className="tcs-timeline-content">
                <div className="tcs-item-meta">
                  <span>06 / LARGE-SCALE DELIVERY</span>
                  <span>UK RETAIL</span>
                </div>
                <h3>Supporting a network migration across 600+ stores.</h3>
                <p>
                  I contributed to a Network as a Service (NaaS) migration
                  initiative involving more than 600 Boots Opticians stores
                  across the United Kingdom.
                </p>
                <p>
                  The work involved supporting migration activities and
                  operational coordination across a large retail environment.
                  It gave me an appreciation of the planning, communication
                  and attention to detail required when technology changes
                  affect business locations at scale.
                </p>

                <div className="tcs-impact">
                  <strong>600+</strong>
                  <div>
                    <b>Boots Opticians stores</b>
                    <span>UK-wide NaaS migration initiative.</span>
                  </div>
                </div>

                <div className="tcs-tags">
                  <span>NaaS migration</span>
                  <span>Retail technology</span>
                  <span>Operational coordination</span>
                  <span>UK project</span>
                </div>
              </div>
            </article>

            <article className="tcs-timeline-item">
              <div className="tcs-timeline-marker">
                <Activity size={18} />
              </div>
              <div className="tcs-timeline-content">
                <div className="tcs-item-meta">
                  <span>07 / TOOLS & TECHNOLOGY</span>
                  <span>DAILY OPERATIONS</span>
                </div>
                <h3>The tools I used to support enterprise operations.</h3>
                <p>
                  Working across application support and enterprise
                  operations gave me hands-on experience with monitoring,
                  ticketing and collaboration tools used to investigate
                  issues and manage operational workflows.
                </p>

                <div className="tcs-tool-grid">
                  <div className="tcs-tool">
                    <Activity size={18} />
                    <span>Dynatrace</span>
                    <small>Application monitoring</small>
                  </div>
                  <div className="tcs-tool">
                    <Activity size={18} />
                    <span>LogicMonitor</span>
                    <small>Infrastructure monitoring</small>
                  </div>
                  <div className="tcs-tool">
                    <BriefcaseBusiness size={18} />
                    <span>BMC Helix</span>
                    <small>Incident & service management</small>
                  </div>
                  <div className="tcs-tool">
                    <GitBranch size={18} />
                    <span>JIRA</span>
                    <small>Work tracking & collaboration</small>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* TCS CLOSING */}
          <div className="tcs-closing">
            <div className="tcs-closing-icon">
              <CheckCircle2 size={23} />
            </div>
            <p className="tcs-kicker">DECEMBER 2022 · CHAPTER COMPLETE</p>
            <h3>More than three years of learning by doing.</h3>
            <p>
              TCS gave me the opportunity to move from development into
              enterprise operations, support business-critical applications
              and take responsibility for real-world problems. Along the way,
              I received three On the Spot Awards and was part of a team
              recognised with a Best Team Award. More importantly, the
              experience shaped how I approach technology: understand the
              issue, learn the environment and keep improving.
            </p>
          </div>
        </div>
      </section>
      <RMIT />
      <Woodside />

      {/* FOOTER */}
      <footer className="footer">
        <div className="content-width">
          <div className="footer-top">
            <div>
              <p className="section-kicker">THE STORY CONTINUES</p>
              <h2>Let's build what's next.</h2>
              <p className="body-copy">
                Interested in connecting, sharing ideas or discussing
                opportunities? I'd be happy to hear from you.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() => setContactOpen(true)}
            >
              Get in touch <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="footer-bottom">
            <a className="nav-logo" href="#home">JT<span>.</span></a>

            <div className="footer-links">
              <a href={`mailto:${email}`}><Mail size={15} /> Email</a>
              <a href={`tel:${phone}`}><Phone size={15} /> Phone</a>
              <a
                href="https://www.linkedin.com/in/jaison-thomas-5213a51b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalLink size={14} />
              </a>
            </div>

            <span className="copyright">© 2026 · Jaison Thomas</span>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button type="button" className="back-to-top" aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}>
          <ChevronUp size={20} />
        </button>
      )}

      {/* Photo lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div className="modal-backdrop photo-lightbox" role="presentation"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}>
            <div className="photo-lightbox-content" role="dialog" aria-modal="true" aria-label={lightbox.alt}
              onClick={event => event.stopPropagation()}>
              <button type="button" className="modal-close lightbox-close" aria-label="Close enlarged photo"
                onClick={() => setLightbox(null)}><X size={22} /></button>
              <img src={lightbox.src} alt={lightbox.alt} />
              <p>{lightbox.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTACT MODAL */}
      <AnimatePresence>
        {contactOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setContactOpen(false)}
          >
            <motion.div
              className="contact-modal"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setContactOpen(false)}
                aria-label="Close contact window"
              >
                <X size={20} />
              </button>

              <p className="section-kicker">GET IN TOUCH</p>
              <h2>Let's connect.</h2>
              <p className="modal-description">
                Feel free to reach out. I'm always happy to connect and
                have a conversation.
              </p>

              <div className="contact-detail">
                <Mail size={18} />

                <a href={`mailto:${email}`} className="contact-email">
                  {email}
                </a>

                <button
                  type="button"
                  className="contact-copy-button"
                  onClick={copyEmail}
                  title={copied ? 'Copied!' : 'Copy email address'}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </button>
              </div>

              <a className="contact-detail" href={`tel:${phone}`}>
                <Phone size={18} />
                <span>{phone}</span>
                <ExternalLink size={15} />
              </a>

              <a
                className="contact-detail"
                href="https://www.linkedin.com/in/jaison-thomas-5213a51b0/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={18} />
                <span>LinkedIn profile</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
