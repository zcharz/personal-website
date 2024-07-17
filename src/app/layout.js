import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: "Charlie Zhao's Personal Website",
  description: "Personal portfolio website built from scratch"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{raleway.className} bg-slate-800`}>{children}</body>
    </html>
  );
}
