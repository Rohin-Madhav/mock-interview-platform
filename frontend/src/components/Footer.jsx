import React from 'react';

function Footer() {
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', marginTop: 'auto', background: '#fafafa' }}>
      <div style={{ maxWidth: 1024, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ color: '#6b7280' }}>© {new Date().getFullYear()} Mock Interview Platform</span>
        <nav>
          <a href="/about" style={{ marginRight: 12, color: '#374151', textDecoration: 'none' }}>About</a>
          <a href="/privacy" style={{ marginRight: 12, color: '#374151', textDecoration: 'none' }}>Privacy</a>
          <a href="/contact" style={{ color: '#374151', textDecoration: 'none' }}>Contact</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
