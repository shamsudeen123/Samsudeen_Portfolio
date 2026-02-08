import React from 'react'

export default function Resume(){
  const experience = [
    {
      title: 'Software Engineer',
      company: 'Emirates NBD Dubai, UAE',
      period: 'July 2024–Present',
      description: 'Built and maintained Decision-Making System frontend in React with LEAP UI, improving usability by 30%. Implemented test automation (Playwright) and unit tests (Vitest) achieving 90%+ coverage. Developed FastAPI automation for PR creation/merging. Collaborated with cross-functional teams (QA, Security, Performance, Business) to deliver enterprise-grade solutions.'
    },
    {
      title: 'Full Stack Developer (MERN)',
      company: 'Panaroma Finance Dubai, UAE',
      period: 'March 2024–July 2024',
      description: 'Built and deployed trading & swapping platform using React.js, Node.js, and AWS. Integrated MetaTrader 5 server and third-party APIs, serving 1,000+ active users. Implemented KYC verification workflows (Sumsub) ensuring 100% regulatory compliance. Designed trading algorithms improving execution speed by 30%.'
    },
    {
      title: 'Full Stack Developer (React JS Lead)',
      company: 'Apps Team Technologies Kerala, India',
      period: 'March 2022–Nov 2023',
      description: 'Led frontend team delivering projects across ecommerce, hospital management, banking, and AI domains. Managed React.js, Next.js, and React Native development. Mentored junior developers, conducted code reviews, and defined project scopes. Actively participated in Agile development and sprint planning.'
    },
    {
      title: 'Frontend Developer (React JS)',
      company: 'Emproto Technologies Bangalore, India',
      period: 'July 2019–Jan 2022',
      description: 'Collaborated on cross-functional teams to design, develop and test software solutions. Took ownership of complex modules ensuring code quality and best practices. Implemented new features across product development lifecycle. Conducted code reviews to optimize performance.'
    }
  ]

  const skills = [
    { label: 'Frontend', items: 'React.js, Next.js, React Native, HTML, CSS, Tailwind CSS, Bootstrap, MUI, Redux Toolkit, Zustand' },
    { label: 'Backend', items: 'Node.js, Express.js, FastAPI, MongoDB, MySQL, PostgreSQL' },
    { label: 'Cloud & DevOps', items: 'AWS, Jenkins, GitHub, GitLab, Bitbucket, Grafana, CI/CD Pipelines, OpenShift' },
    { label: 'Testing & Tools', items: 'Playwright, Vitest, Jest, GitHub Copilot, Intelligent Coding Agents' },
    { label: 'Languages', items: 'JavaScript, TypeScript, Python, Java' },
    { label: 'Domains', items: 'Fintech, Banking, Healthcare, E-commerce, Trading Platforms, Investment Solutions' },
  ]

  return (
    <div>
      <h2>Professional Experience</h2>
      <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        {experience.map((job, idx) => (
          <div key={idx} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
              <div>
                <h3 style={{ margin: 0 }}>{job.title}</h3>
                <p style={{ fontSize: '0.95rem', margin: '0.25rem 0 0 0', color: 'var(--accent-cyan)' }}>{job.company}</p>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>
                {job.period}
              </span>
            </div>
            <p style={{ marginTop: '0.75rem' }}>{job.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Core Competencies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skills.map((skill, idx) => (
            <div key={idx} className="card">
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {skill.label}
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', padding: '1.5rem', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '10px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
          📥 <strong>Download Resume:</strong> For detailed resume with references and certifications, please contact me directly.
        </p>
      </div>
    </div>
  )
}
