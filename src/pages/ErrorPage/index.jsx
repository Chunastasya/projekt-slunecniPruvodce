import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="container">
      <header>
        <h1>404: Tady nic není</h1>
      </header>
      <main>
        <p>Asi jste se spletli...</p>
        <Link to="/" className="base-btn">
          Domu
        </Link>
      </main>
    </div>
  );
};
