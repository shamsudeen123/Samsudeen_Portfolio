import React from 'react'

export default function Blog(){
  const posts = [
    {
      id: 1,
      title: 'Building Scalable Banking Systems with React & Node.js',
      excerpt: 'A deep dive into architecting high-performance financial dashboards handling 100K+ daily transactions with real-time updates...',
      date: '2024-01-20'
    },
    {
      id: 2,
      title: 'HIPAA-Compliant Healthcare APIs: Security Best Practices',
      excerpt: 'Implementing secure medical data systems with FastAPI, MongoDB, and encryption. Key practices for patient data protection...',
      date: '2024-01-15'
    },
    {
      id: 3,
      title: 'React Native: Building iOS & Android Apps from One Codebase',
      excerpt: 'Comprehensive guide to cross-platform development with React Native. Real-world examples from e-commerce applications...',
      date: '2024-01-10'
    },
    {
      id: 4,
      title: 'Leveraging Claude AI for Automated Code Generation',
      excerpt: 'How I use Claude API to automate backend code generation and accelerate development velocity in production systems...',
      date: '2024-01-05'
    },
  ]

  return (
    <div>
      <h2>Latest Articles</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Technical insights on full-stack development, architecture, and modern tools
      </p>
      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="card" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem' }}>
                <h3 style={{ margin: 0 }}>{post.title}</h3>
                <time style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', whiteSpace: 'nowrap' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
              <p>{post.excerpt}</p>
              <a href="#" style={{ marginTop: '1rem', display: 'inline-block' }}>Read more →</a>
            </div>
          ))
        ) : (
          <div className="card">
            <p style={{ color: 'var(--text-tertiary)' }}>No posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
