// src/app/not-found.js

export default function NotFound() {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Página não encontrada
        </p>
        <a href="/" style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px'
        }}>
          Voltar para a Home
        </a>
      </div>
    );
  }
  