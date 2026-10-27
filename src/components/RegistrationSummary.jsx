
function RegistrationSummary({ fullName, status }) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mx-auto mt-6 max-w-3xl rounded-xl bg-white p-5 shadow"
    >
      <h2
        id="summary-heading"
        className="mb-2 text-lg font-bold text-gray-900"
      >
        Registration Summary
      </h2>

      <p className="text-gray-700">
        Name: {fullName || "Not entered yet"}
      </p>

      <p className="mt-1 text-gray-700">
        Status: {status}
      </p>
    </section>
  );
}

export default RegistrationSummary;
