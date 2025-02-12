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



import './globals.css'
import IntercomProvider from './components/IntercomProvider'
import Head from 'next/head'
import GoogleAnalytics from './components/GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>ASOWin | Optimize Your App</title>
        <meta name="description" content="Boost your app’s performance with ASOWin, the best app store optimization tool." />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <GoogleAnalytics/>
      </Head>
      <body>
        <IntercomProvider />
        {children}
      </body>
    </html>
  );
}
