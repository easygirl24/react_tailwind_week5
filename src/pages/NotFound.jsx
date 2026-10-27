
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-center">
      <h1 className="mb-4 text-5xl font-bold text-primary">
        404
      </h1>

      <h2 className="mb-4 text-2xl font-semibold text-gray-900">
        Page Not Found
      </h2>

      <p className="mb-6 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="inline-block rounded-lg bg-primary px-6 py-3
        font-semibold text-white hover:bg-blue-700
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-blue-700"
      >
        Return Home
      </Link>
    </main>
  );
}

export default NotFound;
