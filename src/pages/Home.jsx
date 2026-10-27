
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">
        Welcome to Create Account
      </h1>

      <p className="mb-6 text-gray-600">
        Welcome to my Week 6 React project. Explore the registration
        form and learn how the app uses routing and shared state.
      </p>

      <Link
        to="/form"
        className="inline-block rounded-lg bg-primary px-6 py-3
        font-semibold text-white hover:bg-blue-700
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-blue-700"
      >
        Go to Registration Form
      </Link>
    </main>
  );
}

export default Home;
