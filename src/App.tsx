import { Routes, Route } from "react-router-dom";
import Landing from "./components/ui/pages/Landing";
// import About from "./components/ui/pages/About";
// import Features from "./components/ui/pages/Features";
// import Contact from "./components/ui/pages/Contact";

import "./App.css";
import Signup from "./components/ui/pages/Signup";
import Signin from "./components/ui/pages/Signin";
import AccountType from "./components/ui/pages/AccountType";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/account-type" element={<AccountType />} />

      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
