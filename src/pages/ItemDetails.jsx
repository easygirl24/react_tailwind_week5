
import { Link, useParams } from "react-router-dom";

function ItemDetails() {
  const { itemId } = useParams();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">
        Item Details
      </h1>

      <p className="mb-6 text-gray-600">
        You are viewing item number:{" "}
        <span className="font-bold text-primary">{itemId}</span>
      </p>

      <Link
        to="/"
        className="inline-block rounded-lg bg-primary px-6 py-3
        font-semibold text-white hover:bg-blue-700
        focus-visible:outline focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-blue-700"
      >
        Back to Home
      </Link>
    </main>
  );
}

export default ItemDetails;
