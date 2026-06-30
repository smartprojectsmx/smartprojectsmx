import './globals.css';

export const metadata = {
  title: 'Smart Projects MX',
  description: 'Soluciones integrales para gobierno, seguridad, salud e industria'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
