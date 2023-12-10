import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
      const resizeHandler = () => {
        document.documentElement?.style.setProperty(
          "--listing-height",
          `${window.visualViewport.height}px`
        );
        document.documentElement?.style.setProperty(
          "--listing-width",
          `${window.visualViewport.width}px`
        );
      }
      resizeHandler();
      document.addEventListener('resize', resizeHandler);
    }, [])

    return (
      <div className="main_container">
        <Header />
        <main className="content container">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    );
}

export default App;