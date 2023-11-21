import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="main_container">
            <Header />
            <main className="content">
            <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App;