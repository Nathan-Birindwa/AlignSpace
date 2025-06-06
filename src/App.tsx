import { Routes, Route } from "react-router-dom";
import Landing from "./components/ui/pages/Landing";
// import About from "./components/ui/pages/About";
// import Features from "./components/ui/pages/Features";
// import Contact from "./components/ui/pages/Contact";

import "./App.css";
import Signup from "./components/ui/pages/Signup";
import Signin from "./components/ui/pages/Signin";
import AccountType from "./components/ui/pages/AccountType";
import PlanType from "./components/ui/pages/PlanType";
import CreateWorkspace from "./components/ui/pages/CreateWorkSpace";
import InviteUsers from "./components/ui/pages/InviteUsersToWorkSpace";
import Dashboard from "./components/ui/pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/account-type" element={<AccountType />} />
      <Route path="/choose-plan" element={<PlanType />} />
      <Route path="/create-work-space" element={<CreateWorkspace />} />
      <Route path="/invite-users" element={<InviteUsers />} />
      <Route path="/" element={<Dashboard />} />

      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/features" element={<Features />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
