import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields')
      return
    }

    if (!form.email.includes('@')) {
      setError('Please enter a valid email')
      return
    }

    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'samsudeen.mohammedkunhi@gmail.com', href: 'mailto:samsudeen.sm@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+971 54 569 5979', href: 'tel:+971545695979' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/samsudeen-sm', href: 'https://linkedin.com/in/samsudeen-sm' },
  ]

  return (
    <div>
      <h2>Get in Touch</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem', marginTop: '2rem' }}>
        {contactInfo.map((info, idx) => (
          <a key={idx} href={info.href} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{info.icon}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>
                {info.label}
              </p>
              <p style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--accent-cyan)' }}>
                {info.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Send me a message</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              aria-label="Name"
            />
            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              aria-label="Email"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
              aria-label="Message"
            />
          </div>
          {error && <p className="error">✗ {error}</p>}
          <div style={{ marginTop: '1.5rem' }}>
            <button type="submit" disabled={sent}>
              {sent ? '✓ Message sent!' : 'Send message'}
            </button>
            {sent && (
              <span style={{ marginLeft: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Thanks! I'll get back to you within 48 hours.
              </span>
            )}
          </div>
        </form>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '10px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
          💼 <strong>Open to Opportunities:</strong> Currently exploring exciting roles in fintech, banking, and enterprise software development. Specializing in React.js, Next.js, Node.js, and full-stack development with proven expertise in AI-powered development and test automation.
        </p>
      </div>
    </div>
  )
}
