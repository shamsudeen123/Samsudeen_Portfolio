import React from 'react'

export default function About(){
  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'React Native', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'Material-UI']
    },
    {
      category: 'State Management',
      items: ['Redux Toolkit', 'Zustand', 'Context API', 'React Query']
    },
    {
      category: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Microservices Architecture']
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      category: 'Testing & QA',
      items: ['Playwright', 'Vitest', 'Jest', 'Unit Testing', 'E2E Testing', 'Test Automation (90%+ coverage)']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'OpenShift', 'Docker', 'Jenkins', 'GitHub/GitLab CI/CD', 'Grafana Monitoring']
    },
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java',]
    },
    {
      category: 'AI & Tools',
      items: ['GitHub Copilot', 'Claude', 'Cursor']
    },
  ]

  return (
    <div>
      <h2>Professional Profile</h2>
      <div className="card">
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
          Senior Software Engineer with 7 years of hands-on experience building scalable web and mobile applications.
          Expert in full-stack development with proven expertise in fintech, banking, healthcare, and e-commerce domains.
          Strong background in leading development teams, delivering enterprise-grade solutions, and implementing test automation (90%+ coverage).
          Leverages AI-powered development tools like GitHub Copilot and intelligent coding agents to accelerate development velocity and optimize costs.
          Recognized with Lime Light Award (Performer of the Year, Dec 2023) for exceptional performance and delivery.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', marginTop: '2.5rem' }}>
          {skills.map(skill => (
            <div key={skill.category}>
              <h3 style={{ fontSize: '1rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #06b6d4 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {skill.category}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {skill.items.map(item => (
                  <li key={item} style={{ padding: '0.6rem 0', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    ✨ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
