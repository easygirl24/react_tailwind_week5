import { useReducer } from "react";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationSummary from "./components/RegistrationSummary";


import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-2 top-2 z-50 -translate-y-20 rounded bg-white px-4 py-3 font-semibold text-blue-700 focus:translate-y-0 focus:outline focus:outline-2 focus:outline-blue-700"
    >
      Skip to main content
    </a>
  );
}

function Navigation() {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
      isActive
        ? "bg-blue-100 text-blue-800"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap items-center justify-between gap-3 bg-white px-5 py-4 shadow-sm md:px-10"
    >
      <Link to="/" className="font-bold text-gray-900">
        Create Account
      </Link>

      <div className="flex flex-wrap gap-2">
        <NavLink to="/" end className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/form" className={linkStyle}>
          Form
        </NavLink>

        <NavLink to="/thank-you" className={linkStyle}>
          Thank You
        </NavLink>

        <NavLink to="/items/25" className={linkStyle}>
          Item Details
        </NavLink>
      </div>
    </nav>
  );
}

function RegistrationPage() {
  return <RegistrationForm />;
}


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


function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <BrowserRouter>
      <SkipLink />
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <div id="main-content" tabIndex="-1">
              <Home />
              <RegistrationSummary
                fullName={state.fullName}
                status={state.status}
              />
            </div>
          }
        />

        <Route
          path="/form"
          element={<RegistrationForm state={state} dispatch={dispatch} />}
        />

        <Route path="/thank-you" element={<ThankYou />} />

        <Route path="/items/:itemId" element={<ItemDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
