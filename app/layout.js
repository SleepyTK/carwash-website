/* eslint-disable @next/next/no-head-element */
import NavBar from "./nav-bar";
import Body from "./body";
import Services from "./services";
import Book from "./book";
import Info from './info';
import Reviews from './reviews';
import Contact from './contact'
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />

        <Body />
        
        <Services />

        <Book />

        <Info />

        <Reviews />
        
        <Contact />

        <Footer />

        <div>{children}</div>
      </body>
    </html>
    
  );
}
