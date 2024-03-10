import './ui/global.css';
import { lusitana, montserrat, libre_baskerville } from './ui/fonts';
import Header from "./Header";
import Footer from "./Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${libre_baskerville.className} `}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
