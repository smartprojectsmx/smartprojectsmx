import './globals.css';

export const metadata = {
  title: 'Smart Projects MX | Soluciones Integrales',
  description: 'Soluciones integrales para gobierno, seguridad, salud, protección civil, vehículos especiales, tecnología, telecomunicaciones, ingeniería y logística.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
