import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header fixo no topo */}
            <header
                style={{
                    backgroundColor: '#2F80ED',
                    color: 'white',
                    padding: '1rem 0',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <h1 style={{ fontSize: '1.5rem', textAlign: 'center', margin: 0 }}>
                        Programas de Formação
                    </h1>
                </div>
            </header>

            {/* Conteúdo principal */}
            <main style={{ flex: 1, padding: '2rem 0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: '#f7fafc',
                    padding: '1rem 0',
                    borderTop: '1px solid #e2e8f0',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                    <p style={{ textAlign: 'center', color: '#4a5568', margin: 0 }}>
                        © 2025 - Plataforma de Programas de Formação
                    </p>
                </div>
            </footer>
        </div>
    );
}
