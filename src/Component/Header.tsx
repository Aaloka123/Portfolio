const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 32px',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 700 }}>Aaloka</div>

      <nav style={{ display: 'flex', gap: '24px', fontWeight: 500 }}>
        <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home
        </a>
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>
          About
        </a>
        <a
          href="#projects"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          My Projects
        </a>
        <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header