import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <h1>Find the Right Doctor</h1>

      <p>
        Book your healthcare appointment quickly and easily.
      </p>

      <Link className="btn" to="/doctors">
        Find a Doctor
      </Link>
    </section>
  );
}

export default Home;