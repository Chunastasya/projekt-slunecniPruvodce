import { Link } from 'react-router-dom'; 

export const ErrorPage = () => {
  return (
    <div className="container">
      <header>
        <h2>404: Tady nic není</h2>
      </header>
      <main>
        <p>
          Asi jste se spletli...
        </p>
        <Link to="/">Domu</Link>
      </main>
    </div>
  );
};
