import { useCallback, useEffect, useRef, useState } from 'react'
import { cvOrder, cvProfiles } from './cv/data'
import type { CvId } from './cv/types'
import { parseCvIdFromLocation, setCvIdInUrl } from './cv/url'

export function App() {
  const sheetRef = useRef<HTMLElement>(null)
  const [exporting, setExporting] = useState(false)
  const [active, setActive] = useState<CvId>(() => parseCvIdFromLocation())

  useEffect(() => {
    const onPop = () => setActive(parseCvIdFromLocation())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const select = useCallback((id: CvId) => {
    setActive(id)
    setCvIdInUrl(id)
  }, [])

  const handleExportPdf = useCallback(async () => {
    const el = sheetRef.current
    if (!el) return
    setExporting(true)
    try {
      const { exportCvToPdf } = await import('./exportPdf')
      const safe = active.replace(/[^a-z0-9-]/gi, '-')
      await exportCvToPdf(el, `Andrew-Derevyashko-${safe}-cv.pdf`)
    } finally {
      setExporting(false)
    }
  }, [active])

  const p = cvProfiles[active]

  return (
    <div className="page">
      <header className="top">
        <div className="top-inner">
          <p className="brand">{p.name.split(' ')[0]} — CV</p>
          <div className="top-actions">
            <nav className="tabs" aria-label="Resume variant">
              {cvOrder.map((id) => (
                <button
                  key={id}
                  type="button"
                  className={id === active ? 'tab tab-active' : 'tab'}
                  onClick={() => select(id)}
                  aria-pressed={id === active}
                >
                  {cvProfiles[id].label}
                </button>
              ))}
            </nav>
            <button
              type="button"
              className="btn-export"
              onClick={() => void handleExportPdf()}
              disabled={exporting}
              aria-busy={exporting}
            >
              {exporting ? 'Exporting…' : 'Export PDF'}
            </button>
          </div>
        </div>
      </header>

      <main ref={sheetRef} className="sheet">
        <section className="hero">
          <h1>{p.name}</h1>
          <p className="role">{p.title}</p>
          <ul className="hero-contacts">
            {p.contacts.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className="hero-contact-link">
                    <span className="hero-contact-label">{c.label}</span>
                    <span className="hero-contact-value">{c.value}</span>
                  </a>
                ) : (
                  <span className="hero-contact-link">
                    <span className="hero-contact-label">{c.label}</span>
                    <span className="hero-contact-value">{c.value}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="headline">{p.headline}</p>
          <p className="summary">{p.summary}</p>
        </section>

        <section className="block">
          <h2>Skills</h2>
          <div className="skill-groups">
            {p.skills.map((sg) => (
              <div key={sg.group} className="skill-group">
                <p className="skill-group-label">{sg.group}</p>
                <ul className="tags">
                  {sg.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {p.languages && p.languages.length > 0 ? (
          <section className="block">
            <h2>Languages</h2>
            <ul className="tags">
              {p.languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="block">
          <h2>Experience</h2>
          <ul className="timeline">
            {p.experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <div className="job-head">
                  <span className="job-title">{job.role}</span>
                  <span className="job-meta">
                    {job.company} · {job.period}
                  </span>
                </div>
                <ul className="bullets">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="block">
          <h2>Education</h2>
          <ul className="plain">
            {p.education.map((e) => (
              <li key={e.place}>
                <strong>{e.place}</strong> — {e.degree}
                <span className="muted"> · {e.period}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
