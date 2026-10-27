
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  acceptedTerms: false,
  showPassword: false,
  errors: {},
  status: "idle",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: "" },
        status: "idle",
      };

    case "TOGGLE_PASSWORD":
      return { ...state, showPassword: !state.showPassword };

    case "SET_ERRORS":
      return { ...state, errors: action.errors };

    case "SET_STATUS":
      return { ...state, status: action.status };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function RegistrationForm({ state, dispatch }) {
  const navigate = useNavigate();

  const {
    fullName,
    email,
    password,
    acceptedTerms,
    showPassword,
    errors,
    status,
  } = state;

  const passwordRules = [
    { label: "Minimum 10 characters", valid: password.length >= 10 },
    { label: "One uppercase letter", valid: /[A-Z]/.test(password) },
    {
      label: "One special character (e.g. !, @, #)",
      valid: /[^A-Za-z0-9]/.test(password),
    },
    { label: "One number (1, 2, 3, etc.)", valid: /\d/.test(password) },
  ];

  const passwordIsValid = passwordRules.every((rule) => rule.valid);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleSubmit(event) {
    event.preventDefault();

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

    dispatch({ type: "SET_ERRORS", errors: newErrors });

    if (Object.keys(newErrors).length > 0) {
      dispatch({ type: "SET_STATUS", status: "idle" });
      return;
    }

    dispatch({ type: "SET_STATUS", status: "submitting" });

    // This simulates submission; no real registration API is connected.
    window.setTimeout(() => {
      dispatch({ type: "SET_STATUS", status: "success" });
      navigate("/thank-you");
    }, 800);
  }

  function handleChange(field, value) {
    dispatch({ type: "UPDATE_FIELD", field, value });
  }

  return (
    <main
      id="main-content"
      tabIndex="-1"
      className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-gradient-to-br from-orange-300 via-pink-400 to-purple-800 px-4 py-10 sm:px-6"
    >
      <section className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
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
              required
              value={fullName}
              onChange={(event) => handleChange("fullName", event.target.value)}
              placeholder="John Smith"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              className={`w-full rounded-lg border px-3 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />

            {errors.fullName && (
              <p id="fullName-error" className="mt-1 text-sm text-red-600">
                {errors.fullName}
              </p>
            )}
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
              required
              value={email}
              onChange={(event) => handleChange("email", event.target.value)}
              placeholder="youremail@gmail.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-lg border px-3 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />

            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
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
                required
                value={password}
                onChange={(event) => handleChange("password", event.target.value)}
                placeholder="Enter your password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby="password-rules"
                className={`w-full rounded-lg border px-3 py-3 pr-20 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />

              <button
                type="button"
                onClick={() => dispatch({ type: "TOGGLE_PASSWORD" })}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded px-1 text-xs font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <ul id="password-rules" className="mt-3 space-y-2 text-sm">
              {passwordRules.map((rule) => (
                <li key={rule.label} className={rule.valid ? "text-green-700" : "text-gray-600"}>
                  <span aria-hidden="true" className="mr-2">
                    {rule.valid ? "✓" : "○"}
                  </span>
                  {rule.label}
                </li>
              ))}
            </ul>

            {errors.password && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-start gap-2 text-sm text-gray-700">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={acceptedTerms}
                onChange={(event) => handleChange("acceptedTerms", event.target.checked)}
                aria-invalid={Boolean(errors.terms)}
                aria-describedby={errors.terms ? "terms-error" : undefined}
                className="mt-1 h-4 w-4 accent-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              />

              <label htmlFor="terms">
                I agree to the Terms of Use and Privacy Policy.
              </label>
            </div>

            {errors.terms && (
              <p id="terms-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.terms}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Creating account..." : "Get started"}
          </button>

          <p role="status" aria-live="polite" className="text-center text-sm text-gray-600">
            {status === "submitting" ? "Submitting your form..." : ""}
          </p>
        </form>
      </section>
    </main>
  );
}

export default RegistrationForm;
