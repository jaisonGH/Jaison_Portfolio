import { BriefcaseBusiness, CalendarDays, MapPin, Monitor, Settings, Users, ShieldCheck } from 'lucide-react'

/**
 * Woodside Energy chapter of the portfolio.
 * Keep this component independent of App.jsx: do not import App or Woodside here.
 */
export default function Woodside() {
  const tasks = [
    { icon: Monitor, title: 'EUC support and troubleshooting', description: 'Supporting end-user computing environments and resolving day-to-day technical issues.' },
    { icon: Settings, title: 'Device deployment and SCCM', description: 'Assisting with device deployment activities and working with SCCM.' },
    { icon: Users, title: 'Active Directory and user access', description: 'Supporting user access requests and Active Directory-related tasks.' },
    { icon: ShieldCheck, title: 'Reliable user support', description: 'Helping users get the technology access and assistance they need to work effectively.' },
  ]

  return (
    <section id="woodside" aria-labelledby="woodside-title" style={{ background: '#0b1220', color: '#edf3ff', padding: 'clamp(72px, 9vw, 130px) 24px', borderTop: '1px solid rgba(148,163,184,.13)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#8ba5c9', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', marginBottom: 32 }}>
          <span style={{ color: '#6bb9ff' }}>07</span>
          <span style={{ width: 36, height: 1, background: '#48617f' }} />
          <span>THE NEXT CHAPTER</span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 28, marginBottom: 36 }}>
          <div style={{ flex: '1 1 360px' }}>
            <p style={{ margin: '0 0 14px', color: '#76bbff', fontSize: 12, fontWeight: 700, letterSpacing: '0.13em' }}>PROFESSIONAL EXPERIENCE</p>
            <h2 id="woodside-title" style={{ fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.1, letterSpacing: '-0.035em', margin: '0 0 16px', fontWeight: 750 }}>Woodside Energy<span style={{ color: '#66b9ff' }}>.</span></h2>
            <p style={{ fontSize: 'clamp(18px, 2vw, 23px)', color: '#b8c9df', margin: 0 }}>EUC Support Deployment Engineer</p>
          </div>
          <div style={{ display: 'grid', gap: 12, color: '#a7b9d0', fontSize: 14 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><CalendarDays size={17} color="#79bdff" /> November 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><MapPin size={17} color="#79bdff" /> Victoria, Australia</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><BriefcaseBusiness size={17} color="#79bdff" /> End-user computing and deployment</span>
          </div>
        </div>

        <p style={{ maxWidth: 760, color: '#b1c0d4', lineHeight: 1.9, fontSize: 16, margin: '0 0 38px' }}>
          In November 2026, I began a new chapter in end-user computing support and deployment at Woodside Energy. The role builds on my enterprise IT support experience through hands-on troubleshooting, device deployment and user access support.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))', gap: 16 }}>
          {tasks.map(({ icon: Icon, title, description }) => (
            <article key={title} style={{ border: '1px solid rgba(139,165,201,.2)', borderRadius: 14, padding: 24, background: 'rgba(255,255,255,.035)' }}>
              <Icon size={23} color="#79bdff" aria-hidden="true" />
              <h3 style={{ fontSize: 17, lineHeight: 1.4, margin: '20px 0 10px', color: '#f2f6ff' }}>{title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#a9bbd0', margin: 0 }}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
