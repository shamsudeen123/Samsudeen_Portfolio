import React from 'react'

export default function Home(){
  return (
    <div className="card home-hero">
      <div>
        <h1>Samsudeen SM</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: '500', color: 'var(--accent-cyan)', marginBottom: '1rem' }}>
          Senior Software Engineer | Full Stack Developer
        </p>
        <p>
          6.9+ years of expertise building scalable web and mobile applications across fintech, banking, healthcare, and e-commerce domains.
          Proficient in React.js, Next.js, Node.js, React Native, and FastAPI. Expert in leading teams, delivering enterprise-grade solutions,
          and leveraging AI-powered development tools like GitHub Copilot. Proven track record with 90%+ test automation coverage and AWS cloud deployment expertise.
        </p>
        <div className="cta">
          <a href="#contact"><button>Let's Work Together</button></a>
        </div>
      </div>
      <div className="avatar" aria-hidden="true"></div>
    </div>
  )
}
