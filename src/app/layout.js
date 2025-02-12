// // src/app/layout.js
// // import Navbar from './components/Navbar';
// import './globals.css'
// // import IntercomProvider from '@/components/IntercomProvider'

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* <IntercomProvider /> */}
//         {/* <Navbar /> */}
//         {children}
//       </body>
//     </html>
//   );
// }



// src/app/layout.js
import './globals.css'
import IntercomProvider from './components/IntercomProvider'
import Head from 'next/head'

export const metadata = {
  title: 'ASOWin',
  description: 'Your app description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>  {/* Correct Next.js Head Usage */}
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <body>
        <IntercomProvider />
        {children}
      </body>
    </html>
  );
}
