import './AlemniMotion.css'

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu']
const hours = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00']

// col = day index + 2 (col 1 is the time gutter), row = hour index + 2 (row 1 is the day header)
const sessions = [
  { title: 'Math', time: '10:00', col: 2, row: 2 },
  { title: 'Arabic Lit.', time: '12:30', col: 3, row: 3 },
  { title: 'Math', time: '10:00', col: 4, row: 2 },
  { title: 'Physics', time: '16:00', col: 5, row: 5, focus: true },
  { title: 'Quiz · Physics', time: '14:00', col: 6, row: 4 },
  { title: 'Chemistry', time: '18:30', col: 7, row: 6 },
]

const roster = [
  { name: 'Malak Hesham', initials: 'MH' },
  { name: 'Youssef Tarek', initials: 'YT' },
  { name: 'Farida Adel', initials: 'FA' },
  { name: 'Seif Nabil', initials: 'SN' },
]

function AlemniMotion() {
  return (
    <div
      className="motion-card al"
      role="img"
      aria-label="Alemni animated preview: sessions fill a weekly calendar, attendance is marked for a Physics class, and parents are messaged automatically"
    >
      <div className="al-copy">
        <span className="al-mark">alemni</span>
        <h4 className="al-head">
          {['Run the week,', 'not the spreadsheet.'].map((line, i) => (
            <span className="al-line" key={line}>
              <span style={{ animationDelay: `${i * 0.18}s` }}>{line}</span>
            </span>
          ))}
        </h4>
        <p className="al-meta">Next.js · Supabase · Realtime</p>
      </div>

      <div className="al-cal">
        <div className="al-cal-top">
          <span>Upcoming sessions</span>
          <span>Week of Jun 15</span>
        </div>
        <div className="al-grid">
          {days.map((d, i) => (
            <span className="al-day" key={d} style={{ gridColumn: i + 2 }}>
              {d}
            </span>
          ))}
          {hours.map((h, i) => (
            <span
              className="al-hour"
              key={h}
              style={{ gridRow: i + 2, animationDelay: `${i * 0.06}s` }}
            >
              {h}
            </span>
          ))}
          {sessions.map((s, i) => (
            <div
              className={s.focus ? 'al-block al-block--focus' : 'al-block'}
              key={`${s.title}-${s.col}`}
              style={{ gridColumn: s.col, gridRow: s.row, animationDelay: `${i * 0.32}s` }}
            >
              <b>{s.title}</b>
              <span>{s.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="al-sheet">
        <div className="al-sheet-top">
          <b>Physics</b>
          <span>Tue · 16:00</span>
        </div>
        {roster.map((s, i) => (
          <div className="al-row" key={s.name}>
            <span className="al-avatar">{s.initials}</span>
            <span className="al-name">{s.name}</span>
            <span className="al-check" style={{ animationDelay: `${i * 0.42}s` }}>
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 6.2 5 8.6 9.5 3.6" />
              </svg>
            </span>
          </div>
        ))}
      </div>

      <div className="al-toast">
        <i />
        <div>
          <b>Sent to 12 parents</b>
          <span>WhatsApp · Physics attendance · 16:07</span>
        </div>
      </div>
    </div>
  )
}

export default AlemniMotion
