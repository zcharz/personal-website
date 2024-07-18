import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'charlie zhao',
  description: "charlie's personal website"
};


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`{raleway.className} bg-slate-800`}>{children}</body>
    </html>
  );
}
