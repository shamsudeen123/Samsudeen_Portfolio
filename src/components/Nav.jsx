import React, { useState, useEffect } from 'react'

export default function Nav(){
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏡' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'resume', label: 'Resume', icon: '📋' },
    { id: 'contact', label: 'Contact', icon: '💬' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        const { top } = element.getBoundingClientRect()
        return top <= 100
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <div className="brand">
        <span className="brand-icon">⚡</span>
        <span className="brand-text">Samsudeen SM</span>
      </div>
      <div className="nav-links">
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{
              fontWeight: activeSection === item.id ? '600' : '500',
            }}
            onClick={() => setActiveSection(item.id)}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}
