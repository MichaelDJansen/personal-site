import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css'
import './themes/default.css';

import { Space_Grotesk } from 'next/font/google'
import { getAssetPath } from './utils';

const spaceGrotesk = Space_Grotesk({subsets: ["latin"], weight: ["400", "700"]});

export const metadata = {
  title: 'Michael David Jansen',
  description: 'Web Developer Portfolio Site',
};

type TRootLayout = {
  children: React.ReactNode
};

const RootLayout: React.FC<TRootLayout> = ({
  children
}) => (
  <html lang="en" data-theme="default">
    <link rel="icon" type="image/x-icon" href={getAssetPath("/assets/favicon-32x32.png")} />
    <body className={`${spaceGrotesk.className} bg-quarternary min-h-screen grid grid-rows-layout`}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;