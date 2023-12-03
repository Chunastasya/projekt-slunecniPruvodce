import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

const App = () => {
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