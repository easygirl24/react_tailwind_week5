
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const passwordRules = [
    {
      label: "Minimum 10 characters",
      valid: password.length >= 10,
    },
    {
      label: "One uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "One special character (e.g. !, @, #)",
      valid: /[^A-Za-z0-9]/.test(password),
    },
    {
      label: "One number (1, 2, 3, etc.)",
      valid: /\d/.test(password),
    },
  ];

  const passwordIsValid = passwordRules.every(
    (rule) => rule.valid
  );

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function validateForm() {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!emailIsValid) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!passwordIsValid) {
      newErrors.password = "Please meet all password requirements.";
    }

    if (!acceptedTerms) {
      newErrors.terms = "You must accept the terms to continue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    // Simulate a successful submission.
    // Connect a real registration API here when one is available.
    setTimeout(() => {
      setStatus("success");
    }, 800);
  }

  function handleFieldChange(field, value, setter) {
    setter(value);
    setStatus("idle");

    setErrors((previousErrors) => ({
      ...previousErrors,
      [field]: "",
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-300 via-pink-400 to-purple-800">
      <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-5 py-4 shadow-sm md:px-10">
        <a href="#" className="flex items-center gap-2 font-bold text-gray-800">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            ◆
          </span>
          Company Name
        </a>

        <div className="hidden items-center gap-6 text-sm text-gray-600 lg:flex">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About us</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">Contact us</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#login" className="rounded-lg px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
            Log in
          </a>
          <a href="#signup" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700">
            Sign up
          </a>
        </div>
      </nav>

      <main className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden px-4 py-10 sm:px-6">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-2/3 w-3/4 rounded-full bg-gradient-to-tr from-cyan-500 to-sky-400 opacity-90 blur-sm" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-3/4 w-3/4 rounded-full bg-gradient-to-br from-purple-700 via-fuchsia-600 to-indigo-800 opacity-90 blur-sm" />
        <div className="pointer-events-none absolute left-0 top-0 h-2/3 w-full bg-gradient-to-br from-orange-300/70 via-pink-400/40 to-transparent" />

        <section
          id="signup"
          className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        >
          <div className="mb-5 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-3xl text-primary">
              ◆
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Create an account
            </h1>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Set up your account to get more advantages using our product.
            </p>
          </div>

          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-gray-800">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(event) => handleFieldChange("fullName", event.target.value, setFullName)}
                placeholder="John Smith"
                aria-invalid={Boolean(errors.fullName)}
                className={`w-full rounded-lg border px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-100 ${
                  errors.fullName ? "border-red-500" : "border-gray-300 focus:border-primary"
                }`}
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => handleFieldChange("email", event.target.value, setEmail)}
                placeholder="youremail@gmail.com"
                aria-invalid={Boolean(errors.email)}
                className={`w-full rounded-lg border px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-blue-100 ${
                  errors.email ? "border-red-500" : "border-gray-300 focus:border-primary"
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => handleFieldChange("password", event.target.value, setPassword)}
                  placeholder="Enter your password"
                  aria-invalid={Boolean(errors.password)}
                  className={`w-full rounded-lg border px-3 py-3 pr-20 text-sm outline-none transition focus:ring-2 focus:ring-blue-100 ${
                    errors.password ? "border-red-500" : "border-gray-300 focus:border-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <ul className="mt-3 space-y-2 text-sm">
                {passwordRules.map((rule) => (
                  <li
                    key={rule.label}
                    className={rule.valid ? "text-green-700" : "text-gray-500"}
                  >
                    <span className="mr-2">{rule.valid ? "✓" : "○"}</span>
                    {rule.label}
                  </li>
                ))}
              </ul>

              {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="terms"
                  checked={acceptedTerms}
                  onChange={(event) => {
                    setAcceptedTerms(event.target.checked);
                    setErrors((previous) => ({ ...previous, terms: "" }));
                    setStatus("idle");
                  }}
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <span>
                  I agree to the{" "}
                  <a href="#terms" className="font-medium text-primary hover:underline">Terms of Use</a>
                  {" "}and{" "}
                  <a href="#privacy" className="font-medium text-primary hover:underline">Privacy Policy</a>.
                </span>
              </label>
              {errors.terms && <p className="mt-1 text-sm text-red-600">{errors.terms}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting"
                ? "Creating account..."
                : status === "success"
                  ? "Account form completed"
                  : "Get started"}
            </button>

            {status === "success" && (
              <p role="status" className="rounded-lg bg-green-50 p-3 text-center text-sm text-green-700">
                Success! Your form passed validation. No account has been created because no registration service is connected yet.
              </p>
            )}

            <p className="pt-1 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="#login" className="font-semibold text-primary hover:underline">
                Log in
              </a>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
