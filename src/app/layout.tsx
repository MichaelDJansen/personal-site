import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './globals.css'
import './themes/default.css';

import { Lato } from 'next/font/google'

const lato = Lato({subsets: ["latin"], weight: ["400", "700"]});

export const metadata = {
  title: 'Michael David Jansen',
  description: 'Web developer Portfolio Site',
};

type TRootLayout = {
  children: React.ReactNode
};

const RootLayout: React.FC<TRootLayout> = ({
  children
}) => (
  <html lang="en" data-theme="default">
    <body className={`${lato.className} bg-quarternary min-h-screen grid grid-rows-layout`}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;