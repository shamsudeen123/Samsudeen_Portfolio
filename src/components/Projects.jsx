import React from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Decision Management System (DMS)',
    desc: 'Enterprise decision workflow system deployed on OpenShift. Built with React LEAP UI frontend. Implemented Playwright test automation achieving 90%+ coverage. Developed FastAPI microservices for automated PR creation/merging and compliance enforcement.',
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'Playwright', 'OpenShift'],
    link: '#'
  },
  {
    id: 2,
    title: 'Trading & Swapping Platform',
    desc: 'Scalable fintech platform serving 1,000+ active users. Built with React.js frontend, Node.js backend, deployed on AWS. Integrated MetaTrader 5 server, real-time market data APIs. Implemented KYC workflows (Sumsub) ensuring 100% regulatory compliance.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'MT5 Integration'],
    link: '#'
  },
  {
    id: 3,
    title: 'Hospital Management System (Growthscape)',
    desc: 'Comprehensive healthcare platform for student rotations and assessments. Used by 500+ staff and students. Real-time analytics via interactive dashboards. Built with React.js frontend and React Native mobile app, MySQL backend.',
    tags: ['React.js', 'React Native', 'Node.js', 'MySQL', 'AWS'],
    link: '#'
  },
  {
    id: 4,
    title: 'E-commerce Platform (Gold Star Products)',
    desc: 'Hotel equipment e-commerce platform with integrated SEO optimization. Connected with Odoo for automated inventory management. Increased organic traffic by 40%. Deployed on AWS with responsive design and performance optimization.',
    tags: ['React.js', 'Odoo Integration', 'AWS', 'SEO', 'Responsive Design'],
    link: '#'
  },
  {
    id: 5,
    title: 'Decision-Making System UI',
    desc: 'Frontend application for LEAP Decision Making System. Built with React.js ensuring enterprise-grade usability. Improved configuration time for business users by 30%. Implemented comprehensive unit tests with Vitest and Playwright automation.',
    tags: ['React.js', 'LEAP UI', 'Vitest', 'Playwright', 'Enterprise'],
    link: '#'
  },
  {
    id: 6,
    title: 'AI-Powered Development Tools Integration',
    desc: 'Leveraged GitHub Copilot and AI-powered coding agents to accelerate development velocity. Implemented intelligent code generation reducing project timelines and optimizing development costs across multiple enterprise projects.',
    tags: ['GitHub Copilot', 'AI Agents', 'Automation', 'Development Tools', 'Optimization'],
    link: '#'
  }
]

export default function Projects(){
  return (
    <div>
      <h2>Featured Projects</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Showcase of production applications across banking, healthcare, and e-commerce domains
      </p>
      <div className="projects-grid">
        {sampleProjects.map(p => (
          <div key={p.id} className="project">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {p.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <a href={p.link} style={{ fontWeight: '600' }}>View project →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
