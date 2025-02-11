// src/app/layout.js
// import Navbar from './components/Navbar';
import './globals.css'
// import IntercomProvider from '@/components/IntercomProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <IntercomProvider /> */}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}